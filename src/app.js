const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const dotenv = require('dotenv');
dotenv.config();

const app = express();

const index = require('./routes/index');
const CategoryRoutes = require('./routes/category.routes');
const ProductRoutes = require('./routes/product.routes');
const FeesRoutes = require('./routes/fees.routes');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(index);
app.use('/api/', CategoryRoutes);
app.use('/api/', ProductRoutes);
app.use('/api/', FeesRoutes);

module.exports = app;