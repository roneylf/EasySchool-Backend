import {Router} from 'express'
import {CursoAlunoController} from '../controllers/CursoAlunoController.js'

const cursoAlunoRoutes =  Router();
const cursoAlunoController = new CursoAlunoController();

cursoAlunoRoutes.get('/cursoalunos',cursoAlunoController.get);
cursoAlunoRoutes.post('/cursoalunos',cursoAlunoController.post);
cursoAlunoRoutes.put('/cursoalunos/:codigo',cursoAlunoController.put)
cursoAlunoRoutes.delete('/cursoalunos/:codigo',cursoAlunoController.delete)

export { cursoAlunoRoutes } 