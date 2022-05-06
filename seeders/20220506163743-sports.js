'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sports', [
      { name: 'Йога' },
      { name: 'Фитнес' },
      { name: 'Тяжелая атлетика' },
      { name: 'Бокс' },
      { name: 'Джампинг' },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sports', null, {});
  },
};
