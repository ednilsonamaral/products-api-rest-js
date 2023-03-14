const { DataTypes } = require('sequelize');

const database = require('../config/database');

const Category = database.define('categories', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
        unique: true
    },

    createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
        default: new Date(),
    },

    updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE
    }
});

module.exports = Category;