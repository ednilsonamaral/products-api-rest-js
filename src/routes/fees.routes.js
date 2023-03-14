const router = require('express-promise-router')();

const Fees = require('../controllers/fees.controller');

router.get('/fees/product/:idProduct', Fees.getFeesByProduct);

module.exports = router;