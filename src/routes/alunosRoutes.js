import {Router} from 'express'
import {AlunoController} from '../controllers/AlunoController.js'

const alunosRoutes =  Router();
const alunosController = new AlunoController();

alunosRoutes.get('/alunos',alunosController.get);
alunosRoutes.post('/alunos',alunosController.post)
alunosRoutes.put('/alunos/:codigo',alunosController.put)
alunosRoutes.delete('/alunos/:codigo',alunosController.delete)

export { alunosRoutes } 