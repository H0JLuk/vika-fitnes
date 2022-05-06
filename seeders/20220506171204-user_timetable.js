'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User_Timetables', [
      { user_id: 1, timetable_id: 1 },
      { user_id: 1, timetable_id: 2 },
      { user_id: 1, timetable_id: 3 },

      { user_id: 2, timetable_id: 1 },
      { user_id: 2, timetable_id: 2 },
      { user_id: 2, timetable_id: 3 },

      { user_id: 3, timetable_id: 4 },
      { user_id: 3, timetable_id: 5 },
      { user_id: 3, timetable_id: 6 },

      { user_id: 4, timetable_id: 7 },
      { user_id: 4, timetable_id: 8 },
      { user_id: 4, timetable_id: 9 },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User_Timetables', null, {});
  },
};
