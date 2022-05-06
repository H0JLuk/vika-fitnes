'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('User_Classes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      IdUser: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users', // имя таблицы
            schema: 'schema'
          },
          key: 'IdUser' // поле таблицы
        },
        allowNull: false
      },
      IdClass: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Сlasses', // имя таблицы
            schema: 'schema'
          },
          key: 'IdClass' // поле таблицы
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('User_Classes');
  }
};