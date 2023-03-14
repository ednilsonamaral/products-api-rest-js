const Fees = require('../models/fees.model');
const Product = require('../models/product.model');

exports.getFeesByProduct = async (req, res) => {
    /*
    #swagger.description = 'Route for calculate installments value'

    #swagger.parameters['num_parcelas'] = {
        description: 'Number of installments',
        type: 'number',
        required: true,
        in: 'query',
        example: 5,
    }
    */
    const { num_parcelas } = req.query || 12; // 12 as default if not specified
    const { idProduct } = req.params;
    const product = await getProduct(idProduct);
    if (!product) {
        res.status(404).json({ message: 'Product not found' });
    }

    const { id_category } = product;
    const fees = await getFeesByCategory(id_category);
    if (!fees) {
        res.status(404).json({ message: 'Category not found' });
    }

    const productValue = product.value;
    const feesValue = fees.value;
    const feePercentage = feesValue / 100;

    let installmentValue = productValue * feePercentage / (1 - Math.pow(1 + feePercentage, - num_parcelas));
    installmentValue = installmentValue.toFixed(2);

    res.status(200).json({ 
        message: 'Installment value calculated successfully',
        value: `${num_parcelas}x R$ ${installmentValue}`,
        product
    });
};

const getProduct = async (idProduct) => {
    try {
        const product = await Product.findByPk(idProduct);
        return product;
    } catch (error) {
        throw error;
    }
};

const getFeesByCategory = async (id_category) => {
    const query = {
        where: {
            id_category
        }
    };

    try {
        const category = await Fees.findOne(query);
        return category;
    } catch (error) {
        throw error;
    }
};