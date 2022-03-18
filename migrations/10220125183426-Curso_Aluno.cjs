"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("curso_alunos", {
      codigo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      
      codigo_aluno: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "alunos",
          key: "codigo",
        },
      },
      codigo_curso: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "cursos",
          key: "codigo",
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /*

    */
  },
};
