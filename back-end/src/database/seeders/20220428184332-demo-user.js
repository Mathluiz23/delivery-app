'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      name: 'Delivery App Admin',
      password: 'a4c86edecc5aee06eff8fdeda69e0d04',
      email: 'adm@deliveryapp.com',
      role: 'administrator'
    },
    {
      name: 'Fulana Pereira',
      password: '3c28d2b0881bf46457a853e0b07531c6',
      email: 'fulana@deliveryapp.com',
      role: 'seller'
    },
    {
      name: 'Cliente Zé Birita',
      password: '1c37466c159755ce1fa181bd247cb925',
      email: 'zebirita@email.com',
      role: 'customer'
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
