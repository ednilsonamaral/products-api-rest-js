'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('fees',
      [
        {
          id: 1,
          id_category: 1,
          value: 5,
          created_at: new Date()
        },

        {
          id: 2,
          id_category: 2,
          value: 2.5,
          created_at: new Date()
        },

        {
          id: 3,
          id_category: 3,
          value: 1,
          created_at: new Date()
        },

      ],
    {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('fees', null, {});
  }
};