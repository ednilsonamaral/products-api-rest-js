const { DataTypes } = require('sequelize');

const database = require('../config/database');

const Fees = database.define('fees', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      id_category: {
        type: DataTypes.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },

    value: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        required: true
    },

      createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
    },

    updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE,
    }
});

Fees.associate = models => {
    Fees.belongsTo(models.Category);
};

module.exports = Fees;