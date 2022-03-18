import { Aluno } from "../../models/aluno.js";
import { HttpError } from "../helpers/HttpError.js";
import {CursoAluno} from '../../models/curso_aluno.js'
class AlunoController {
  async get(req, res, next) {
    try {
      const alunos = await Aluno.findAll();
      return res.json(alunos);
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
      const { nome } = req.body;
      const alunoAlreadyExists = await Aluno.findOne({
        where: {
          nome: nome,
        },
      });
      if (alunoAlreadyExists) {
        const httpError = new HttpError();
        httpError.message = "aluno Already Exists";
        httpError.status = 404;
        req.error = httpError;
        next();
      } else {
        const aluno = await Aluno.create({
          nome: nome,
        });

        return res.json({
          message: "aluno created",
          success: true,
          codigo: aluno.codigo,
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
    const { codigo } = req.params;

    const { nome } = req.body;

    const aluno = await Aluno.update({ nome: nome }, { where: { codigo: codigo } });
    return res.json({
      message: "aluno updated",
      success: true,
      codigo: aluno.codigo,
    });
  }
  async delete(req, res, next) {
    const toDeletealuno = await Aluno.findOne({
      where: {
        codigo: req.params.codigo,
      },
    });
    const curso_aluno = await CursoAluno.findOne({
      where: {
        codigo_aluno: req.params.codigo,
      },
    });

    if (!toDeletealuno) {
      const httpError = new HttpError();
      httpError.message = "aluno not found";
      httpError.status = 404;
      req.error = httpError;
      next();
    } else {
      if (curso_aluno) {
        const httpError = new HttpError();
        httpError.message = "aluno is in a course";
        httpError.status = 400;
        req.error = httpError;
        next();
      } else {
        await Aluno.destroy({
          where: {
            codigo: req.params.codigo,
          },
        });
        return res.json({
          message: "aluno deleted",
          success: true,
        });
      }
    }
  }
}

export { AlunoController };
