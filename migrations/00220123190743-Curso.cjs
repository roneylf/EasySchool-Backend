'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cursos', {
      codigo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: true
      },
      ementa: {
        type: Sequelize.STRING,
        allowNull: true
      },
    });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
