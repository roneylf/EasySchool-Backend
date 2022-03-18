import {sequelize} from  '../src/helpers/db.js'
import {   Sequelize  } from 'sequelize'


const Aluno = sequelize.define('Aluno',{
    nome:{
        type:Sequelize.STRING,
        allowNull:true,
    },

},{
    freezeTableName:true,
    tableName:"alunos"
})

export { Aluno }