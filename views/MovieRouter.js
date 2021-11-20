const express = require('express');
const router = express.Router();

// Middlewares
const authJwt = require("../middlewares/auth");

/**
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *  schemas:
 *      Movie:
 *          type: object
 *          required:
 *              - title
 *              - genre
 *              - cast
 *              - city
 *          properties:
 *              title:
 *                  type: string
 *                  description: Movie Title
 *              Genre:
 *                  type: string
 *                  description: Movie genre
 *              Cast:
 *                  type: string
 *                  description: Movie cast
 *          example:
 *              title: NuevoTitulo
 *              genre: NuevoGenero
 *              cast: NuevoReparto
 *              city: Zaragoza
 *              
 */

//Importo modelo de datos
const MovieController = require('../controllers/MovieController');

// End-points CRUD movies
router.get('/', authJwt.verifyToken, MovieController.getAll);
/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Retrieve the list of all the movies.
 *     tags: [Movies]
 *     description: Retrieve the list of all the movies.
 *     responses:
 *       200:
 *         description: list of all movies.
 *     security:
 *       - bearerAuth: []
 */
router.get('/:id', authJwt.verifyToken, MovieController.getById);
/**
 * @swagger
 * /movies/{id}:
 *   get:
 *     summary: Retrieves a Movie by id
 *     tags: [Movies]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: id of the Movie
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Movie by its id
 *     security:
 *       - bearerAuth: []
 */
router.get('/name/:title', authJwt.verifyToken, MovieController.getByTitle);
/**
 * @swagger
 * /movies/name/{title}:
 *   get:
 *     summary: Retrieves a Movie by title
 *     tags: [Movies]
 *     parameters:
 *       - in : path
 *         name: title
 *         description: title of the Movie
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Movie by its title
 *     security:
 *       - bearerAuth: []
 */
router.get('/genre/:genre', authJwt.verifyToken, MovieController.getByGenre);
/**
 * @swagger
 * /movies/genre/{genre}:
 *   get:
 *     summary: Retrieves a Movie by genre
 *     tags: [Movies]
 *     parameters:
 *       - in : path
 *         name: genre
 *         description: genre of the Movie
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Movie by its genre
 *     security:
 *       - bearerAuth: []
 */
router.get('/cast/:cast', authJwt.verifyToken, MovieController.getByCast);
/**
 * @swagger
 * /movies/cast/{cast}:
 *   get:
 *     summary: Retrieves a Movie by cast
 *     tags: [Movies]
 *     parameters:
 *       - in : path
 *         name: cast
 *         description: cast of the Movie
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Movie by its cast
 *     security:
 *       - bearerAuth: []
 */
router.get('/city/:city', authJwt.verifyToken, MovieController.getByCity);
/**
 * @swagger
 * /movies/city/{city}:
 *   get:
 *     summary: Retrieves a Movie by Available city
 *     tags: [Movies]
 *     parameters:
 *       - in : path
 *         name: city
 *         description: city where the Movie is available
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Movie by available city
 *     security:
 *       - bearerAuth: []
 */
router.post('/', authJwt.isAdmin, MovieController.create);
/**
 * @swagger
 * /movies:
 *   post:
 *     summary: Create a new Movie
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       200:
 *         description: The Movie was successfully created
 *     security:
 *       - bearerAuth: []
 */

router.put('/:id', authJwt.isAdmin, MovieController.update);
/**
 * @swagger
 * /movies/{id}:
 *   put:
 *     summary: updates movie by id
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: movie id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       200:
 *         description: The Movie was updated
 *     security:
 *       - bearerAuth: []
 *
 */
router.delete('/', authJwt.isAdmin, MovieController.deleteAll);
router.delete('/:id', authJwt.isAdmin, MovieController.delete);
/**
 * @swagger
 *  /movies/{id}:
 *    delete:
 *      summary: removes movie from Database
 *      tags: [Movies]
 *      parameters:
 *        - in: path
 *          name: id
 *          description: movie id
 *          required: true
 *          schema:
 *            type: integer
 *      responses:
 *        200:
 *          description: The movie was deleted
 *      security:
 *       - bearerAuth: []
 *
 */

module.exports = router;