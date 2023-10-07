const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'Comtacts API'
  },
  host: 'madi341-1.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['../routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

