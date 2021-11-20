const express = require('express');
const router = express.Router();

// Middlewares
const authJwt = require("../middlewares/auth");

//Importo modelo de datos
const AuthController = require('../controllers/AuthController');

/**
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *  schemas:
 *      User:
 *          type: object
 *          required:
 *              - name
 *              - email
 *              - password
 *              - city
 *          properties:
 *              name:
 *                  type: string
 *                  description: User's name
 *              email:
 *                  type: string
 *                  description: email to be registered to the user
 *              password:
 *                  type: string
 *                  description: Password to access the Api
 *              city:
 *                  type: string
 *                  description: City where user lives
 *          example:
 *              name: UsuarioPrueba
 *              email: usuarioprueba@pruebaapi.com
 *              password: contra1234
 *              city: Zaragoza
 *
 */

// Dos rutas: login y registro
// /api/singin & /api/singup
router.get('/', authJwt.isAdmin, AuthController.getAll);
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve the list of Users.
 *     tags: [Users]
 *     description: Retrieve the list of Users.
 *     responses:
 *       200:
 *         description: list of Users.
 *       500:
 *         description: Error.
 *     security:
 *       - bearerAuth: []
 */
router.get('/:id', authJwt.verifyToken, AuthController.getById);
/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Retrieves an User by id
 *     tags: [Users]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: id of the User
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: User by its id
 *     security:
 *       - bearerAuth: []
 */
router.get('/city/:city', authJwt.verifyToken, AuthController.getByCity);
/**
 * @swagger
 * /users/city/{city}:
 *   get:
 *     summary: Retrieves users by city
 *     tags: [Users]
 *     parameters:
 *       - in : path
 *         name: city
 *         description: city to search for users
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Users by city
 *     security:
 *       - bearerAuth: []
 */
router.post('/signin', AuthController.signIn);
/**
 * @swagger
 * /users/signin:
 *   post:
 *     summary: User login
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The User has successfully loggedIn
 */
router.post('/signup', AuthController.signUp);
/**
 * @swagger
 * /users/signup:
 *   post:
 *     summary: Create a new User
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The User has successfully loggedIn
 */
router.delete('/:id', authJwt.isAdmin, AuthController.deleteUser);
/**
 * @swagger
 *  /users/{id}:
 *    delete:
 *      summary: removes users from Database
 *      tags: [Users]
 *      parameters:
 *        - in: path
 *          name: id
 *          description: user's id
 *          required: true
 *          schema:
 *            type: integer
 *      responses:
 *        200:
 *          description: The user was deleted
 *      security:
 *       - bearerAuth: []
 *
 */
router.delete('/', authJwt.isAdmin, AuthController.deleteAll);


module.exports = router;