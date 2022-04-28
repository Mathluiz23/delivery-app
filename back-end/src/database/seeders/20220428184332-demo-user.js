'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      id: 1,
      name: 'John Doe',
      password: 'umasenhamuitosegura',
      email: 'john@example.com',
      role: 'customer'
    },
    {
      id: 2,
      name: 'Ada Lovelace',
      password: 'primeiramulherprogramadora',
      email: 'ada@example.com',
      role: 'seller'
    },
    {
      id: 3,
      name: 'Madre Teresa',
      password: 'decalcutá',
      email: 'teresa@example.com',
      role: 'administrator'
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
