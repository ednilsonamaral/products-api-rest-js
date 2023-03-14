const router = require('express-promise-router')();

const SchemaValidation = require('../middlewares/schema.validation');

const ProductSchema = require('../schemas/product.schema');

const Product = require('../controllers/product.controller');

router.post('/products', SchemaValidation(ProductSchema), Product.create);
router.get('/products', Product.getAll);
router.get('/products/:id', Product.getById);
router.put('/products/:id', SchemaValidation(ProductSchema), Product.update);
router.delete('/products/:id', Product.remove);

module.exports = router;