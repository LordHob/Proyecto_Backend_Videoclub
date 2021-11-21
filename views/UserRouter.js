const express = require('express');
const router = express.Router();

// Middlewares
const authJwt = require("../middlewares/auth");

//Importo modelo de datos
const AuthController = require('../controllers/AuthController');

// Rutas de Login y Registro
router.get('/', authJwt.isAdmin, AuthController.getAll);
router.get('/:id', authJwt.verifyToken, AuthController.getById);
router.get('/city/:city', authJwt.verifyToken, AuthController.getByCity);
router.post('/signin', AuthController.signIn);
router.post('/signup', AuthController.signUp);
router.delete('/:id', authJwt.isAdmin, AuthController.deleteUser);
router.delete('/', authJwt.isAdmin, AuthController.deleteAll);

module.exports = router;
