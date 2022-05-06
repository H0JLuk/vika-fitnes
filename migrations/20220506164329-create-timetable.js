'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Timetables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      week_day: {
        type: Sequelize.INTEGER,
        validate: { min: 0, max: 180 },
      },
      time_start: {
        type: Sequelize.TIME,
      },
      time_end: {
        type: Sequelize.TIME,
      },
      sport_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Sports' },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Timetables');
  },
};
