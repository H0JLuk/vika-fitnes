'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User_Timetables', [
      { UserId: 1, TimetableId: 1 },
      { UserId: 1, TimetableId: 2 },
      { UserId: 1, TimetableId: 3 },

      { UserId: 2, TimetableId: 1 },
      { UserId: 2, TimetableId: 2 },
      { UserId: 2, TimetableId: 3 },

      { UserId: 3, TimetableId: 4 },
      { UserId: 3, TimetableId: 5 },
      { UserId: 3, TimetableId: 6 },

      { UserId: 4, TimetableId: 7 },
      { UserId: 4, TimetableId: 8 },
      { UserId: 4, TimetableId: 9 },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User_Timetables', null, {});
  },
};
