const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const dotenv = require('dotenv');
dotenv.config();

const app = express();

const index = require('./routes/index');
const CategoryRoutes = require('./routes/category.routes');
const ProductRoutes = require('./routes/product.routes');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(index);
app.use('/api/', CategoryRoutes);
app.use('/api/', ProductRoutes);

module.exports = app;