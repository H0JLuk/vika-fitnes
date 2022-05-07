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
        role: 'user',
      },
      {
        first_name: 'Марина',
        last_name: 'Петрова',
        login: 'petrova_marina',
        password: 'marina_12',
        phone: '8945648648543',
        age: 24,
        role: 'user',
      },
      {
        first_name: 'Андрей',
        last_name: 'Мулин',
        login: 'andr_mulin',
        password: 'andro_228',
        phone: '8956848643543',
        age: 19,
        role: 'user',
      },
      {
        first_name: 'Сергей',
        last_name: 'Карпов',
        login: 'karp_sergo',
        password: 'sergo_karp_432',
        phone: '89423454384',
        age: 91,
        role: 'user',
      },
      {
        first_name: 'Глад',
        last_name: 'Валакас',
        login: 'dead_inside',
        password: 'bda_bda_1337_1488',
        phone: '88005553535',
        age: 54,
        role: 'user',
      },

      {
        first_name: 'Becky',
        last_name: 'Taylor',
        login: 'taylor228',
        password: 'grdrd43g',
        phone: '8984843483483',
        age: 29,
        role: 'trainer',
        photo: '/img/trainer/trainer-1.jpg',
      },
      {
        first_name: 'Noah',
        last_name: 'Leonard',
        login: 'frsgrdbd',
        password: 'LeonardLeon',
        phone: '8984843483483',
        age: 23,
        role: 'trainer',
        photo: '/img/trainer/trainer-2.jpg',
      },
      {
        first_name: 'Evelyn',
        last_name: 'Fields',
        login: 'san_sanych',
        password: 'evelyn-evenyl',
        phone: '8984843483483',
        age: 26,
        role: 'trainer',
        photo: '/img/trainer/trainer-3.jpg',
      },
      {
        first_name: 'Leroy',
        last_name: 'Guzman',
        login: 'feshrs',
        password: 'fesehgrs',
        phone: '8984843483483',
        age: 25,
        role: 'trainer',
        photo: '/img/trainer/trainer-4.jpg',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
