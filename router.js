const router = require('express').Router();

// Middlewares
const auth = require('./middlewares/auth');

//Importamos Routes definidas en views
const OrderRouter = require('./routes/order.routes');
const MovieRouter = require('./routes/movie.routes');
const UserRouter = require('./routes/user.router');

//Rutas
router.use('/api', auth, UserRouter); //Login and register routes
router.use('/order', auth, OrderRouter); // CRUD orders
router.use('/movie', auth, MovieRouter); // CRUD movies


//Faltaba por poner el "auth" delante de los archivos Router, para impedir que se pueda acceder sin autentificación. Para hacer que funcione, quitar los "auth", crear un usuario, copiar el token, usarlo en Postman (Authorization - Type: Barear Token), y luego ya volver a ponerlos (los "auth").

module.exports = router;