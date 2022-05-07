'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Timetables', [
      {
        week_day: 1,
        time_start: '10:00',
        time_end: '13:00',
        SportId: 1,
      },
      {
        week_day: 3,
        time_start: '10:00',
        time_end: '13:00',
        SportId: 1,
      },
      {
        week_day: 5,
        time_start: '10:00',
        time_end: '13:00',
        SportId: 1,
      },

      {
        week_day: 3,
        time_start: '16:00',
        time_end: '18:00',
        SportId: 3,
      },
      {
        week_day: 3,
        time_start: '16:00',
        time_end: '18:00',
        SportId: 3,
      },
      {
        week_day: 5,
        time_start: '16:00',
        time_end: '18:00',
        SportId: 3,
      },

      {
        week_day: 2,
        time_start: '20:00',
        time_end: '22:00',
        SportId: 5,
      },
      {
        week_day: 4,
        time_start: '20:00',
        time_end: '22:00',
        SportId: 5,
      },
      {
        week_day: 6,
        time_start: '20:00',
        time_end: '22:00',
        SportId: 5,
      },

      {
        week_day: 1,
        time_start: '18:00',
        time_end: '20:30',
        SportId: 4,
      },
      {
        week_day: 2,
        time_start: '18:00',
        time_end: '20:30',
        SportId: 4,
      },
      {
        week_day: 3,
        time_start: '18:00',
        time_end: '20:30',
        SportId: 4,
      },
      {
        week_day: 4,
        time_start: '18:00',
        time_end: '20:30',
        SportId: 4,
      },
      {
        week_day: 5,
        time_start: '18:00',
        time_end: '20:30',
        SportId: 4,
      },
      {
        week_day: 6,
        time_start: '14:00',
        time_end: '16:00',
        SportId: 4,
      },

      {
        week_day: 1,
        time_start: '12:00',
        time_end: '14:15',
        SportId: 2,
      },
      {
        week_day: 2,
        time_start: '12:00',
        time_end: '14:15',
        SportId: 2,
      },
      {
        week_day: 3,
        time_start: '12:00',
        time_end: '14:15',
        SportId: 2,
      },
      {
        week_day: 4,
        time_start: '12:00',
        time_end: '14:15',
        SportId: 2,
      },
      {
        week_day: 5,
        time_start: '12:00',
        time_end: '14:15',
        SportId: 2,
      },
      {
        week_day: 6,
        time_start: '11:00',
        time_end: '12:15',
        SportId: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Timetables', null, {});
  },
};
