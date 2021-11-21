const express = require('express');
const router = express.Router();

// Middlewares
const authJwt = require("../middlewares/auth");

//Importo modelo de datos
const OrderController = require('../controllers/OrderController');

// End-points CRUD Orders
router.get('/', authJwt.isAdmin, OrderController.getAll);
router.get('/:id', authJwt.isAdmin, OrderController.getById);
router.get('/userId/:userId', authJwt.verifyToken, OrderController.getByUserId);
router.post('/', authJwt.verifyToken, OrderController.create);
router.put('/:id', authJwt.isAdmin, OrderController.update);
router.delete('/', authJwt.isAdmin, OrderController.deleteAll);
router.delete('/:id', authJwt.isAdmin, OrderController.delete);

module.exports = router;
