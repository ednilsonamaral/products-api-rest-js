const Category = require('../models/category.model');

exports.create = async (req, res) => {
    /*
    #swagger.description = 'Route for create new category'

    #swagger.parameters['name'] = {
        description: 'Name of category',
        type: 'string',
        required: true,
        in: 'body',
        example: 'Copo de vidro',
    }
    */
    const { body } = req;

    try {
        const response = await Category.create(body);
        res.status(201).json({
            message: 'Category created successfully',
            data: response
        });
    } catch (error) {
        console.log('error: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getAll = async (req, res) => {
    /*
    #swagger.description = 'Route for list all categories'
    */

    try {
        const response = await Category.findAndCountAll();
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
    /*
    #swagger.description = 'Route for list one category, search by ID param'
    */
    const { id } = req.params;

    try {
        const response = await Category.findByPk(id);
        res.status(200).json({ data: response });
    } catch (error) {
        console.log('error: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.update = async (req, res) => {
    /*
    #swagger.description = 'Route for update existing category'
    */
    let { body } = req;
    body.updated_at = new Date();
    
    const { id } = req.params;
    const query = { where: { id} };

    try {
        await Category.update(body, query);
        res.status(200).json({ message: 'Category updated successfully' });
    } catch (error) {
        console.log('error: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.remove = async (req, res) => {
    /*
    #swagger.description = 'Route for delete existing category'
    */
    const { id } = req.params;
    const query = { where: { id } };

    try {
        await Category.destroy(query);
        res.status(200).json({ message: 'Category removed successfully' });
    } catch (error) {
        console.log('error: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};