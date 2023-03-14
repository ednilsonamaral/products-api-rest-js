const swaggerAutogen = require('swagger-autogen')();

const outputFile = './docs/swagger_output.json';
const endpointsFiles = ['./src/routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles);