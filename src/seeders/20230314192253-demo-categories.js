'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories',
      [
        { name: 'Informática', created_at: new Date() },
        { name: 'Automotivo', created_at: new Date() },
        { name: 'Móveis', created_at: new Date() }
      ],
    {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
