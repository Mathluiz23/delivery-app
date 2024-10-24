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
      password: 'b646cc7fd0ffdc786b7c0ba5b101215f',
      email: 'zebirita@email.com',
      role: 'customer'
    },
    {
      name: 'Cliente Maria Joana',
      password: 'e10adc3949ba59abbe56e057f20f883e',
      email: 'maria@email.com',
      role: 'customer'

    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
