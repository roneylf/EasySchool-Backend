import express from 'express'
import {cursoAlunoRoutes} from './routes/CursoAlunoRoutes.js'
import {cursosRoutes} from './routes/cursosRoutes.js'
import {alunosRoutes} from './routes/alunosRoutes.js'

import {HttpError} from './helpers/HttpError.js'
import {sequelize} from  './helpers/db.js'
import cors from 'cors'





try {
    ( async () => {
        await sequelize.authenticate();
   
    })()
    
    console.log('Conectou no banco de dados');
  } catch (error) {
    console.error('erro ao conectar no banco de dados', error);
  }
const app = express();



app.use(cors())
app.use(express.json())



app.use(cursoAlunoRoutes);
app.use(cursosRoutes);
app.use(alunosRoutes);




app.use((req,res) => {
    if(req.error instanceof HttpError){
        return res.status(req.error.status).json({
            error:req.error.message
        })
    }
    return res.status(500).json({
        message:"Internal server Error"
    })
})
app.listen(process.env.PORT | 80,() => {
    console.log('Server Running')
})
