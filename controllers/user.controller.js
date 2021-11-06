const db = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const User = db.users;

const UserController = {}; //Create the object "user"

//CRUD end-points Functions


//-------------------------------------------------------------------------------------
//REGISTER new user in database
//Log in as existing user

UserController.logIn = (req, res) => {
  let { email, password } = req.body;

  // Search for an existing user
  User.findOne({ email: email }).then(user => {
    if (!user) {
      res.status(404).json({ msg: "User with this email was not found" });
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
        res.status(401).json({ msg: "Wrong password" })
      }
    }
  }).catch(err => {
    res.status(500).json(err);
  })
};


//-------------------------------------------------------------------------------------
//REGISTER new user in database
//create user
UserController.register = (req, res) => {

  // Encriptamos la contraseña
  let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));

  // Crear un usuario
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: password,
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



// FIND
//-------------------------------------------------------------------------------------
// Find a single user with an id
UserController.findOne = (req, res) => {
  const _id = req.params._id;

  User.findById(_id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Could not find user with id " + _id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving user with id=" + _id });
    });
};

//-------------------------------------------------------------------------------------
// Retrieve all users from the database.
UserController.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

  User.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};


// UPDATE
//-------------------------------------------------------------------------------------
// Update an user by id
UserController.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Category.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update user with id=${id}. Maybe user was not found!`
        });
      } else res.send({ message: "User was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};


// DELETE
//-------------------------------------------------------------------------------------
// Delete an user with the specified id in the request
UserController.delete = (req, res) => {
  const id = req.params.id;

  User.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete user with id=${id}. Maybe user was not found!`
        });
      } else {
        res.send({
          message: "user was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete user with id=" + id
      });
    });
};


//-------------------------------------------------------------------------------------
// Delete all users from the database.
UserController.deleteAll = (req, res) => {
  User.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} ALL users were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing ALL users."
      });
    });
};



module.exports = UserController;
//--------------------------------------------------------------------------
//----------------------CODIGO ANTIGUO--------------------------------------
//--------------------------------------------------------------------------
// const db = require("../models");
// const User = db.users;
// // const { user } = require('../models/index');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const authConfig = require('../config/auth');

// const UserController = {}; //Create the object controller

// //-------------------------------------------------------------------------------------
// //Login user with database
// //get user
// UserController.signIn = (req, res) => {
//   let { email, password } = req.body;
//   // Buscar usuario
//   User.findOne({
//     where: { email: email }
//   }).then(user => {
//     if (!user) {
//       res.status(404).json({ msg: "Usuario con este correo no encontrado" });
//     } else {
//       if (bcrypt.compareSync(password, user.password)) {
//         // Creamos el token
//         let token = jwt.sign({ user: user }, authConfig.secret, {
//           expiresIn: authConfig.expires
//         });

//         res.json({
//           user: user,
//           token: token
//         })
//       } else {
//         // Unauthorized Access
//         res.status(401).json({ msg: "Contraseña incorrecta" })
//       }
//     }
//   }).catch(err => {
//     res.status(500).json(err);
//   })
// };


// //-------------------------------------------------------------------------------------
// //REGISTER new user in database
// //create user
// UserController.signUp = (req, res) => {

//   // Encriptamos la contraseña
//   let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));

//   // Crear un usuario
//   User.create({
//     name: req.body.name,
//     email: req.body.email,
//     password: password,
//     // rol: req.body.rol
//   }).then(user => {

//     // Creamos el token
//     let token = jwt.sign({ user: user }, authConfig.secret, {
//       expiresIn: authConfig.expires
//     });

//     res.json({
//       user: user,
//       token: token
//     });

//   }).catch(err => {
//     res.status(500).json(err);
//   });

// };

// UserController.findOne = (req, res) => {
//   const id = req.params.id;

//   User.findById(id)
//     .then(data => {
//       if (!data) res.status(404).send({ message: "Not found Pedido with id " + id });
//       else res.send(data);
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .send({ message: "Error retrieving Pedido with id=" + id });
//     });
// };

// UserController.delete = (req, res) => {
//   const id = req.params.id;

//   User.findByIdAndRemove(id, { useFindAndModify: false })
//     .then(data => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot delete Pedido with id=${id}. Maybe user was not found!`
//         });
//       } else {
//         res.send({
//           message: "User was deleted successfully!"
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Could not delete Pedido with id=" + id
//       });
//     });
// };


// module.exports = UserController;

