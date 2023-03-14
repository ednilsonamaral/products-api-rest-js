const { Sequelize, DataTypes } = require('sequelize');

const Product = sequelize.define('product', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
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
        type: Sequelize.DATE,
    },

    updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE,
    }
});

Product.associate = models => {
    Product.belongsTo(models.Category);
};

module.exports = Product;