import { sequelize } from "../src/helpers/db.js";
import { Sequelize } from "sequelize";
import { Aluno } from "./aluno.js";

const Curso = sequelize.define(
  "Curso",
  {
    codigo: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    ementa: {
      type: Sequelize.STRING,
      allowNull: true,
    },

    createdAt: false,

    updatedAt: false,
  },
  {
    freezeTableName: true,
    tableName: "cursos",
  }
);
Curso.removeAttribute("id");
Curso.removeAttribute("createdAt");
Curso.removeAttribute("updatedAt");

export { Curso };
