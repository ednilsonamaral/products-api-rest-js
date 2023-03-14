'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true
        },

        name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          required: true
      },

      description: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        required: true
    },

    value: {
        type: Sequelize.DataTypes.DECIMAL(10, 2),
        allowNull: false,
        required: true
    },

      createdAt: {
        field: 'created_at',
        type: Sequelize.DATE,
    },

    updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE,
    }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};
