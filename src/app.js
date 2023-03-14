const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const dotenv = require('dotenv');
dotenv.config();

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../docs/swagger_output.json');

const app = express();

const index = require('./routes/index');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());
app.use(cors());

app.use(index);

module.exports = app;