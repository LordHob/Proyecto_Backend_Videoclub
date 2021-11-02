const db = require("../models");
const User = db.users;
// const { user } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

const UserController = {}; //Create the object controller

//-------------------------------------------------------------------------------------
//Login user with database
//get user
UserController.signIn = (req, res) => {
  let { email, password } = req.body;
  // Buscar usuario
  User.findOne({
    where: { email: email }
  }).then(user => {
    if (!user) {
      res.status(404).json({ msg: "Usuario con este correo no encontrado" });
    } else {
      if (bcrypt.compareSync(password, user.password)) {
        // Creamos el token
        let token = jwt.sign({ user: user }, authConfig.secret, {
          expiresIn: authConfig.expires
        });

        res.json({
          user: user,
          token: token
        })
      } else {
        // Unauthorized Access
        res.status(401).json({ msg: "Contraseña incorrecta" })
      }
    }
  }).catch(err => {
    res.status(500).json(err);
  })
};


//-------------------------------------------------------------------------------------
//REGISTER new user in database
//create user
UserController.signUp = (req, res) => {

  // Encriptamos la contraseña
  let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));

  // Crear un usuario
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: password,
    rol: req.body.rol
  }).then(user => {

    // Creamos el token
    let token = jwt.sign({ user: user }, authConfig.secret, {
      expiresIn: authConfig.expires
    });

    res.json({
      user: user,
      token: token
    });

  }).catch(err => {
    res.status(500).json(err);
  });

};

UserController.findOne = (req, res) => {
  const id = req.params.id;

  User.findById(id)
    .then(data => {
      if (!data) res.status(404).send({ message: "Not found Pedido with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Pedido with id=" + id });
    });
};

UserController.delete = (req, res) => {
  const id = req.params.id;

  User.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Pedido with id=${id}. Maybe user was not found!`
        });
      } else {
        res.send({
          message: "User was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Pedido with id=" + id
      });
    });
};


module.exports = UserController;

