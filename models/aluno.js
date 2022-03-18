import {sequelize} from  '../src/helpers/db.js'
import {   Sequelize  } from 'sequelize'


const Aluno = sequelize.define('Aluno',{
    codigo:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:true,
    },

},{
    freezeTableName:true,
    tableName:"alunos"
})

Aluno.removeAttribute('id');
Aluno.removeAttribute('createdAt');
Aluno.removeAttribute('updatedAt');


export { Aluno }