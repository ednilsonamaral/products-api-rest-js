'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products',
      [
        {
          id: 2,
          id_category: 1,
          name: 'mouse multilaser',
          description: 'com fio',
          value: 11.99,
          created_at: new Date()
        },

        {
          id: 3,
          id_category: 1,
          name: 'teclado corsair',
          description: 'com fio',
          value: 157.99,
          created_at: new Date()
        },

        {
          id: 4,
          id_category: 2,
          name: 'fiat 147',
          description: 'cinza chumbo',
          value: 1577.99,
          created_at: new Date()
        },

        {
          id: 5,
          id_category: 3,
          name: 'mesa de escritório com 2 gatevas',
          description: 'chave para gaveta',
          value: 177.59,
          created_at: new Date()
        }
      ],
    {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};