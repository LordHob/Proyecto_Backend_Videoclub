//Importo modelo de datos
const db = require("../models");
const orders = db.order;
const users = db.user;
const movies = db.movie;

const OrderController = {}; //Create the object controller

//CRUD end-points Functions
//-------------------------------------------------------------------------------------
//GET all orders from database
OrderController.getAll = (req, res) => {

  orders.findAll({ include: [{ model: movies }, { model: users }] })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving orders."
      });
    });
};


//-------------------------------------------------------------------------------------
//GET order by Id from database
OrderController.getById = (req, res) => {
  const id = req.params.id;

  orders.findByPk(id, { include: [{ model: movies }, { model: users }] })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find order with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving orders with id=" + id
      });
    });
};


//-------------------------------------------------------------------------------------
//GET order by userId from database 
//FindByUserId
OrderController.getByUserId = (req, res) => {
  const id = req.params.userId;
  if (req.user.user.admin == "1" || req.user.user.id == id) {
    orders.findAll({ where: { userId: id } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving order."
        });
      });
  } else {
    res.send({
      message: `User's ID doesn't match body userId.`
    });
  }
};

//-------------------------------------------------------------------------------------
//CREATE a new order in database
OrderController.create = (req, res) => {
  if (req.user.user.admin == "1" || req.user.user.id == req.body.userId) {
    let myDate = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
    let userCity;
    let movieCity;

    // Validate request
    if (!req.body.userId && !req.body.movieId) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    } else {
      users.findByPk(req.body.userId)
        .then(data => {
          if (data) {
            userCity = data.city;
            movies.findByPk(req.body.movieId)
              .then(data => {
                if (data) {
                  movieCity = data.city;
                  // Create a order
                  if (userCity === movieCity) {
                    const neworder = {
                      userId: req.body.userId,
                      movieId: req.body.movieId,
                      rentDate: new Date(),
                      returnDate: myDate
                    };

                    // Save order in the database
                    orders.create(neworder)
                      .then(data => {
                        res.send(data);
                      })
                      .catch(err => {
                        res.status(500).send({
                          message:
                            err.message || "Some error occurred while creating the new order."
                        });
                      });
                  } else {
                    res.send({
                      message: `Movie is not available to rent in User's City.`
                    });
                  }
                } else {
                  res.send({
                    message: `cannot find movie with id: ${id}.`
                  });
                }
              })
              .catch(err => {
                res.status(500).send({
                  message: `Some error ocurred while fetching Movie.`
                });
              });
          } else {
            res.send({
              message: `cannot find user with id: ${id}.`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: `Some error ocurred while fetching User.`
          });
        });
    }
  } else {
    res.send({
      message: `User's ID doesn't match body userId.`
    });
  }
};


//-------------------------------------------------------------------------------------
//UPDATE a order from database
OrderController.update = (req, res) => {
  const id = req.params.id;

  orders.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "order was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update order with id=${id}. Maybe order was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating order with id=" + id
      });
    });
};


//-------------------------------------------------------------------------------------
//DELETE a order by Id from database
OrderController.delete = (req, res) => {
  const id = req.params.id;

  orders.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "order was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete order with id=${id}. Maybe order was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete order with id=" + id
      });
    });
};


//-------------------------------------------------------------------------------------
//DELETE all orders from database
//delete all orders   
OrderController.deleteAll = (req, res) => {
  orders.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} orders were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all orders."
      });
    });
};

module.exports = OrderController;