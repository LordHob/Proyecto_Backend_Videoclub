const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const db = require("../models");
const users = db.user;

const AuthController = {}; //Create the object controller

//-------------------------------------------------------------------------------------
//GET all users from database
AuthController.getAll = (req, res) => {
    users.findAll()
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

//-------------------------------------------------------------------------------------
//GET user by Id from database
AuthController.getById = (req, res) => {
    const id = req.params.id;
    if (req.user.user.admin == "1" || req.user.user.id == id) {

        users.findByPk(id)
            .then(data => {
                if (data) {
                    res.send(data);
                } else {
                    res.status(404).send({
                        message: `Cannot find user with id=${id}.`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error retrieving user with id=" + id
                });
            });
    } else {
        res.send({
            message: `Authorization required to get other users`
        });
    }
};

//-------------------------------------------------------------------------------------
//GET users by City from database 
//FindByCity
AuthController.getByCity = (req, res) => {
    users.findAll({ where: { city: req.params.city } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Users."
            });
        });
};


//-------------------------------------------------------------------------------------
//Login user with database
//get user
AuthController.signIn = (req, res) => {
    let { email, password } = req.body;
    // Buscar usuario
    users.findOne({
        where: { email: email }
    }).then(user => {
        if (!user) {
            res.status(404).json({ msg: "email not found in users" });
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
                res.status(401).json({ msg: "Wrong Password" })
            }
        }
    }).catch(err => {
        res.status(500).json(err);
    })
};


//-------------------------------------------------------------------------------------
//REGISTER new user in database
//create user
AuthController.signUp = (req, res) => {

    // Encriptamos la contraseña
    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));

    // Crear un usuario
    users.create({
        name: req.body.name,
        email: req.body.email,
        password: password,
        city: req.body.city
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


//-------------------------------------------------------------------------------------
//DELETE a user in database
//deleteUser
AuthController.deleteUser = (req, res) => {
    const id = req.params.id;

    users.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete User with id=${id}. Maybe User was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
};


//-------------------------------------------------------------------------------------
//DELETE ALL Non Admin users in database
//deleteAll
AuthController.deleteAll = (req, res) => {
    users.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Users were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all users."
            });
        });
};

module.exports = AuthController;

