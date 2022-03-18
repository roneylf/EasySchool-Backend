import {sequelize} from  '../src/helpers/db.js'
import {   Sequelize  } from 'sequelize'


const Curso = sequelize.define('Curso',{
    descricao:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    ementa:{
        type:Sequelize.STRING,
        allowNull:true,
    },

},{
    freezeTableName:true,
    tableName:"cursos"
})

export { Curso }