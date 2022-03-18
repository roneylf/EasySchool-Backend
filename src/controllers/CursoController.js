import { Curso } from "../../models/curso.js";

import { HttpError } from "../helpers/HttpError.js";
import { CursoAluno} from "../../models/curso_aluno.js";

class CursoController {
  async get(req, res, next) {
    try {
      const cursos = await Curso.findAll({
        include: ['alunos'],
      });
      return res.json(cursos);
    } catch (e) {
      const httpError = new HttpError();
      httpError.message = e.message;
      httpError.status = 404;
      req.error = httpError;
      next();
    }
  }
  async post(req, res, next) {
    try {
      const { descricao, ementa } = req.body;
      const cursoAlreadyExists = await Curso.findOne({
        where: {
          descricao: descricao,
        },
      });
      if (cursoAlreadyExists) {
        const httpError = new HttpError();
        httpError.message = "curso Already Exists";
        httpError.status = 404;
        req.error = httpError;
        next();
      } else {
        const curso = await Curso.create({
          descricao: descricao,
          ementa: ementa,
        });

        return res.json({
          message: "curso created",
          success: true,
          codigo: curso.codigo,
        });
      }
    } catch (err) {
      const httpError = new HttpError();
      httpError.message = err.message;
      httpError.status = 404;
      req.error = httpError;
      next();
    }
  }
  async put(req, res, next) {
    try {
      const { codigo } = req.params;

      const { descricao, ementa } = req.body;

      let toUpdate = {};
      if (descricao) toUpdate.descricao = descricao;
      if (ementa) toUpdate.ementa = ementa;

      const curso = await Curso.update(toUpdate, { where: { codigo: codigo } });
      return res.json({
        message: "curso updated",
        success: true,
        codigo: curso.codigo,
      });
    } catch (error) {
      const httpError = new HttpError();
      httpError.message = error.message;
      httpError.status = 404;
      req.error = httpError;
      next();
    }
  }
  async delete(req, res, next) {
    const toDeletecurso = await Curso.findOne({
      where: {
        codigo: req.params.codigo,
      },
    });
    const curso_aluno = await CursoAluno.findOne({
      where: {
        codigo_curso: req.params.codigo,
      },
    });
    if (!toDeletecurso) {
      const httpError = new HttpError();
      httpError.message = "curso not found";
      httpError.status = 404;
      req.error = httpError;
      next();
    } else {
      if (curso_aluno) {
        const httpError = new HttpError();
        httpError.message = "has alunos in this course";
        httpError.status = 400;
        req.error = httpError;
        next();
      } else {
        await Curso.destroy({
          where: {
            codigo: req.params.codigo,
          },
        });
        return res.json({
          message: "curso deleted",
          success: true,
        });
      }
    }
  }
}

export { CursoController };
