const db = require("../models");
const Ca = db.cas;

const CaController = {}; //Create the object controller

//CRUD end-points Functions
//-------------------------------------------------------------------------------------
// Create and Save a new Ca
CaController.create = (req, res) => {
  // Validate request
  if (!req.body.nombre) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Ca
  const ca = new Ca({
    nombre: req.body.nombre,
    poblacion: req.body.poblacion,
    superficie: req.body.superficie,
  });

  // Save ca in the database
  ca
    .save(ca)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ca."
      });
    });
};


//-------------------------------------------------------------------------------------
// Retrieve all ca from the database.
CaController.findAll = (req, res) => {
  const nombre = req.query.nombre;
  var condition = nombre ? { nombre: { $regex: new RegExp(nombre), $options: "i" } } : {};

  Ca.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ca."
      });
    });
};


//-------------------------------------------------------------------------------------
// Find a single ca with an id
CaController.findOne = (req, res) => {
  const id = req.params.id;

  Ca.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found ca with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving ca with id=" + id });
    });
};


//-------------------------------------------------------------------------------------
// Update a Ca by the id in the request
CaController.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Ca.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Ca with id=${id}. Maybe Ca was not found!`
        });
      } else res.send({ message: "Ca was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Ca with id=" + id
      });
    });
};


//-------------------------------------------------------------------------------------
// Delete a Ca with the specified id in the request
CaController.delete = (req, res) => {
  const id = req.params.id;

  Ca.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Ca with id=${id}. Maybe Ca was not found!`
        });
      } else {
        res.send({
          message: "Ca was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Ca with id=" + id
      });
    });
};


//-------------------------------------------------------------------------------------
// Delete all Ca from the database.
CaController.deleteAll = (req, res) => {
    Ca.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Ca were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Ca."
      });
    });
};



module.exports = CaController;