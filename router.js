const router = require('express').Router();

//Importamos Routes definidas en views
const MovieRouter = require('./views/MovieRouter');
const OrderRouter = require('./views/OrderRouter');
const UserRouter = require('./views/UserRouter');

//Rutas
router.use('/users', UserRouter);
router.use('/movies', MovieRouter);
router.use('/orders', OrderRouter);

module.exports = router;