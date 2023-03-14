const { DataTypes } = require('sequelize');

const database = require('../config/database');

const Product = database.define('product', {
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

    name: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
        unique: true
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
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

Product.associate = models => {
    Product.belongsTo(models.Category);
};

module.exports = Product;