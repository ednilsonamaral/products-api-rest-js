'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('products', 'id_category',
      {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('products', 'id_category');
  }
};
