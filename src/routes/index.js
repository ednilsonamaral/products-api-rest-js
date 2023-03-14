const express = require('express');
const router = express.Router();

const CategoryRoutes = require('./category.routes');
const ProductRoutes = require('./product.routes');
const FeesRoutes = require('./fees.routes');

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Welcome, baby! :)',
    version: '1.0.0',
  });
});

router.use('/api/', CategoryRoutes);
router.use('/api/', ProductRoutes);
router.use('/api/', FeesRoutes);

module.exports = router;