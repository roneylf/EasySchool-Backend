import { CursoAluno } from "../../models/curso_aluno.js";
import { HttpError } from "../helpers/HttpError.js";

class CursoAlunoController {
  async get(req, res, next) {
    try {
      const curso_alunos = await CursoAluno.findAll({
        include: ["aluno", "curso"],
      });
      return res.json(curso_alunos);
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
      const { codigo_aluno, codigo_curso } = req.body;


      const curso_aluno = await CursoAluno.create({ codigo_aluno: codigo_aluno, codigo_curso: codigo_curso, });

      return res.json({
        message: "user created",
        success: true,
        codigo: curso_aluno.codigo,
      });

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
    const curso_aluno = await CursoAluno.findOne({
      where: {
        codigo: codigo,
      },
    });
    if (!curso_aluno) {
      const httpError = new HttpError();
      httpError.message = "CursoAluno not found";
      httpError.status = 404;
      req.error = httpError;
      next();
    } else {

      const { codigo_aluno, codigo_curso } = req.body;

      let toUpdate = {};
      if (codigo_aluno) toUpdate.codigo_aluno = codigo_aluno;
      if (codigo_curso) toUpdate.codigo_curso = codigo_curso;

      const curso_aluno = await CursoAluno.update(toUpdate, { where: { codigo: codigo } });
      return res.json({
        message: "CursoAluno updated",
        success: true,
        codigo: curso_aluno.codigo,
      });

    }

    return res.json({
      message: "not found",
    });
  }
  async delete(req, res, next) {

    const toDeleteCursoAluno = await CursoAluno.findOne({
      where: {
        codigo: req.params.codigo,
      },
    });
    if (!toDeleteCursoAluno) {
      const httpError = new HttpError();
      httpError.message = "CursoAluno not found";
      httpError.status = 404;
      req.error = httpError;
      next();
    } else {
      await CursoAluno.destroy({
        where: {
          codigo: req.params.codigo,
        },
      });
      return res.json({
        message: "user deleted",
        success: true,
      });

    }
  }
}

export { CursoAlunoController };
