'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Сoaches_Classes', {
      IdCoach_Class: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      IdClass: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Сlasses', // имя таблицы
            schema: 'schema',
          },
          key: 'IdClass', // поле таблицы
        },
        allowNull: false,
      },
      IdСoach: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Сoaches', // имя таблицы
            schema: 'schema',
          },
          key: 'IdСoach', // поле таблицы
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
    await queryInterface.dropTable('Сoaches_Classes');
  },
};
