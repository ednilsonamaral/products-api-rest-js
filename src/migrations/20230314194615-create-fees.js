'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('fees', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

    value: {
        type: Sequelize.DataTypes.DECIMAL(10, 2),
        allowNull: false,
        required: true
    },

    id_category: {
      type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
    await queryInterface.dropTable('fees');
  }
};
