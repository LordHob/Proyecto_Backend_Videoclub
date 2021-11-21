const express = require('express');
const router = express.Router();

// Middlewares
const authJwt = require("../middlewares/auth");

//Importo modelo de datos
const MovieController = require('../controllers/MovieController');

// End-points CRUD movies
router.get('/', authJwt.verifyToken, MovieController.getAll);
router.get('/:id', authJwt.verifyToken, MovieController.getById);
router.get('/name/:title', authJwt.verifyToken, MovieController.getByTitle);
router.get('/genre/:genre', authJwt.verifyToken, MovieController.getByGenre);
router.get('/cast/:cast', authJwt.verifyToken, MovieController.getByCast);
router.get('/city/:city', authJwt.verifyToken, MovieController.getByCity);
router.post('/', authJwt.isAdmin, MovieController.create);
router.put('/:id', authJwt.isAdmin, MovieController.update);
router.delete('/', authJwt.isAdmin, MovieController.deleteAll);
router.delete('/:id', authJwt.isAdmin, MovieController.delete);

module.exports = router;
