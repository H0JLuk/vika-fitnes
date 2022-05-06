'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        first_name: 'Виолетта',
        last_name: 'Волкова',
        login: 'Viola_vol',
        password: 'wolf56_',
        phone: '8907465446845',
        age: 11,
      },
      {
        first_name: 'Марина',
        last_name: 'Петрова',
        login: 'petrova_marina',
        password: 'marina_12',
        phone: '8945648648543',
        age: 24,
      },
      {
        first_name: 'Андрей',
        last_name: 'Мулин',
        login: 'andr_mulin',
        password: 'andro_228',
        phone: '8956848643543',
        age: 19,
      },
      {
        first_name: 'Сергей',
        last_name: 'Карпов',
        login: 'karp_sergo',
        password: 'sergo_karp_432',
        phone: '89423454384',
        age: 91,
      },
      {
        first_name: 'Глад',
        last_name: 'Валакас',
        login: 'dead_inside',
        password: 'bda_bda_1337_1488',
        phone: '88005553535',
        age: 54,
      },

      {
        first_name: 'Сан',
        last_name: 'Саныч',
        login: 'san_sanych',
        password: 'san_123_san',
        phone: '8984843483483',
        age: 29,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
