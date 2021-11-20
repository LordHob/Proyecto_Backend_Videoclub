const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const colors = require('colors');
const morgan = require('morgan');
const logger = require('./config/winston');
const db = require('./db.js');
const router = require('./router.js');
const cors = require("cors"); // Import cors module
const { version } = require('winston');

const app = express();
const PORT = process.env.PORT || 3003; //Configuramos puerto heroku

//Config Cors Options
var corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204
};

//Middleware
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json());
app.use(cors(corsOptions)); //Add CORS Middleware


//Rutas
app.get('/', (req, res) => { res.send('Bienvenidos al backend del videoclub'); });

app.use(router);

const swaggerDoc = swaggerJSDoc({
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Videoclub',
      version: "1.0.0",
      description: 'Backend videoclub - Autor: Rafael Giner Gómez',
    }
  },
  apis: ['./views/*.js']
});

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));


//Connecting to the database
db.then(() => {
  //Starting server
  app.listen(PORT, () => console.log(`Server on port ${PORT}`.america));
})
  .catch((err) => console.log(err.message));