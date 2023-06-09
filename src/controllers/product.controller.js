const Product = require('../models/product.model');

exports.create = async (req, res) => {
    /*
    #swagger.description = 'Route for create new product'
    */
    const { body } = req;

    try {
        const response = await Product.create(body);
        res.status(201).json({
            message: 'Product created successfully',
            data: response
        });
    } catch (error) {
        console.log('error: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getAll = async (req, res) => {
    /* #swagger.description = 'Route for get all products' */
    try {
        const response = await Product.findAndCountAll();
        res.status(200).json({
            total: response.count,
            data: response.rows
        });
    } catch (error) {
        console.log('error: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getById = async (req, res) => {
    /* #swagger.description = 'Route for get one product by ID' */
    const { id } = req.params;

    try {
        const response = await Product.findByPk(id);
        res.status(200).json({ data: response });
    } catch (error) {
        console.log('error: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.update = async (req, res) => {
    /* #swagger.description = 'Route for update existing product' */
    let { body } = req;
    body.updated_at = new Date();
    
    const { id } = req.params;
    const query = { where: { id} };

    try {
        await Product.update(body, query);
        res.status(200).json({ message: 'Product updated successfully' });
    } catch (error) {
        console.log('error: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.remove = async (req, res) => {
    /* #swagger.description = 'Route for remove existing product' */
    const { id } = req.params;
    const query = { where: { id } };

    try {
        await Product.destroy(query);
        res.status(200).json({ message: 'Product removed successfully' });
    } catch (error) {
        console.log('error: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};