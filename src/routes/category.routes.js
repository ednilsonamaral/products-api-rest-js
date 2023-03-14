const router = require('express-promise-router')();

const SchemaValidation = require('../middlewares/schema.validation');

const CategorySchema = require('../schemas/category.schema');

const Category = require('../controllers/category.controller');

router.post('/categories', SchemaValidation(CategorySchema), Category.create);
router.get('/categories', Category.getAll);
router.get('/categories/:id', Category.getById);
router.put('/categories/:id', SchemaValidation(CategorySchema), Category.update);
router.delete('/categories/:id', Category.remove);

module.exports = router;