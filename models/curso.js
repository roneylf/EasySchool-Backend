import {sequelize} from  '../src/helpers/db.js'
import {   Sequelize  } from 'sequelize'


const Curso = sequelize.define('Curso',{
    codigo:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
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
Curso.removeAttribute('id');
Curso.removeAttribute('createdAt');
Curso.removeAttribute('updatedAt');

export { Curso }