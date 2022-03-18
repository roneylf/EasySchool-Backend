import {sequelize} from  '../src/helpers/db.js'
import {   Sequelize  } from 'sequelize'
import { Curso } from './curso.js'


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

  createdAt: false,

  updatedAt: false,


},{
    freezeTableName:true,
    tableName:"alunos"
})

Aluno.removeAttribute('id');
Aluno.removeAttribute('createdAt');
Aluno.removeAttribute('updatedAt');
Aluno.belongsToMany(Curso, {
    through: 'curso_alunos',
    as: 'cursos',
    foreignKey: 'codigo_aluno',
    otherKey: 'codigo_curso'
});
Curso.belongsToMany(Aluno, {
    through: 'curso_alunos',
    as: 'alunos',
    foreignKey: 'codigo_curso',
    otherKey: 'codigo_aluno'
  });
  

export { Aluno }