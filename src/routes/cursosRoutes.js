import {Router} from 'express'
import {CursoController} from '../controllers/CursoController.js'


const cursosRoutes =  Router();
const cursosController = new CursoController();

cursosRoutes.get('/cursos',cursosController.get);
cursosRoutes.post('/cursos',cursosController.post)
cursosRoutes.put('/cursos/:codigo',cursosController.put)
cursosRoutes.delete('/cursos/:codigo',cursosController.delete)

export { cursosRoutes } 