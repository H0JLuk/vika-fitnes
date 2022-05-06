'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Schedules', {
      idSchedules: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Date: {
        type: Sequelize.DATE,
      },
      IdCoach_Class: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Сoaches_Classes', // имя таблицы
            schema: 'schema',
          },
          key: 'IdCoach_Class', // поле таблицы
        },
        allowNull: false,
      },
      IdUser_Class: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'User_Classes', // имя таблицы
            schema: 'schema',
          },
          key: 'IdUser_Class', // поле таблицы
        },
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Schedules');
  },
};
