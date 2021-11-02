const express = require('express');
const router = express.Router();

//Importo modelo de datos
const UserController = require('../controllers/user.Controller');


// Dos rutas: login y registro
// /api/singin & /api/singup
router.post('/signin', UserController.signIn);
router.post('/signup', UserController.signUp);
router.get("/:id", UserController.findOne);  //EndPoint buscar perfil de usuario
router.delete("/:id", UserController.delete); //EndPoint de borrar usuario


module.exports = router;