const db = require("../models");
const Order = db.orders;

const OrderController = {}; //Create the object controller

//CRUD end-points Functions
//-------------------------------------------------------------------------------------
// Create and Save a new order
OrderController.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Order
  const order = new Order({
    idUser: req.body.idUser,
    idMovie: req.body.idMovie,
    rentalDate: req.body.rentalDate,
    returnDate: req.body.returnDate,
  });

  // Save order in the database
  order
    .save(order)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the order"
      });
    });
};


//-------------------------------------------------------------------------------------
// Retrieve all orders from the database.
OrderController.findAll = (req, res) => {
  const movie = req.query.movie;
  var condition = movie ? { movie: { $regex: new RegExp(id), $options: "i" } } : {};

  Order.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving orders"
      });
    });
};


//-------------------------------------------------------------------------------------
// Find a single Province with an id
// OrderController.findOne = (req, res) => {
//   const id = req.params.id;

//   Order.findById(id)
//     .then(data => {
//       if (!data)
//         res.status(404).send({ message: "Not found Province with id " + id });
//       else res.send(data);
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .send({ message: "Error retrieving Province with id=" + id });
//     });
// };


//-------------------------------------------------------------------------------------
// Update a Province by the id in the request
// OrderController.update = (req, res) => {
//   if (!req.body) {
//     return res.status(400).send({
//       message: "Data to update can not be empty!"
//     });
//   }

//   const id = req.params.id;

//   Order.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
//     .then(data => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot update Province with id=${id}. Maybe Province was not found!`
//         });
//       } else res.send({ message: "Province was updated successfully." });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error updating Province with id=" + id
//       });
//     });
// };


//-------------------------------------------------------------------------------------
// Delete a Province with the specified id in the request
// OrderController.delete = (req, res) => {
//   const id = req.params.id;

//   Order.findByIdAndRemove(id, { useFindAndModify: false })
//     .then(data => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot delete Province with id=${id}. Maybe Province was not found!`
//         });
//       } else {
//         res.send({
//           message: "Province was deleted successfully!"
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Could not delete Province with id=" + id
//       });
//     });
// };


//-------------------------------------------------------------------------------------
// Delete all provinces from the database.
// OrderController.deleteAll = (req, res) => {
//     Order.deleteMany({})
//     .then(data => {
//       res.send({
//         message: `${data.deletedCount} provinces were deleted successfully!`
//       });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all provinces."
//       });
//     });
// };


//-------------------------------------------------------------------------------------
// Find all published Tutorials
// OrderController.findAllAvailable = (req, res) => {
//     Order.find({ available: true })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving provinces."
//       });
//     });
// };

module.exports = OrderController;