import { sequelize } from "../src/helpers/db.js";
import { Sequelize } from "sequelize";
import { Aluno } from "./aluno.js";
import { Curso } from "./curso.js";

const CursoAluno = sequelize.define(
  "Curso_Aluno",
  {
    codigo:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
  },
   
    codigo_aluno: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    codigo_curso: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    timestamps: false,

    createdAt: false,
  
    updatedAt: false,
  },
  {
    freezeTableName: true,
    tableName: "curso_alunos",
  }
);

CursoAluno.belongsTo(Curso, {
  as: "curso",
  foreignKey: "codigo_curso",
});
CursoAluno.belongsTo(Aluno, {
  as: "aluno",
  foreignKey: "codigo_aluno",
});

CursoAluno.removeAttribute("id");
CursoAluno.removeAttribute("createdAt");
CursoAluno.removeAttribute("updatedAt");
export { CursoAluno };
