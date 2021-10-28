const db = require("../models");
const City = db.cities;

const CityController = {}; //Create the object controller

//CRUD end-points Functions
//-------------------------------------------------------------------------------------
// Create and Save a new City
CityController.create = (req, res) => {
  // Validate request
  if (!req.body.nombre) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a City
  const city = new City({
    nombre: req.body.nombre,
    poblacion: req.body.poblacion,
    cp: req.body.cp,
    capital_pro: req.body.capital_pro,
    capital_ca: req.body.capital_ca,
    provinceId: req.body.provinceId
  });

  // Save City in the database
  city
    .save(city)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};


//-------------------------------------------------------------------------------------
// Retrieve all Cities from the database.
CityController.findAll = (req, res) => {
  const nombre = req.query.nombre;
  var condition = nombre ? { nombre: { $regex: new RegExp(nombre), $options: "i" } } : {};

  City.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Cities."
      });
    });
};


//-------------------------------------------------------------------------------------
// Find a single City with an id
CityController.findOne = (req, res) => {
  const id = req.params.id;

  City.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found City with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving City with id=" + id });
    });
};


//-------------------------------------------------------------------------------------
// Update a City by the id in the request
CityController.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  City.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update City with id=${id}. Maybe City was not found!`
        });
      } else res.send({ message: "City was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating City with id=" + id
      });
    });
};


//-------------------------------------------------------------------------------------
// Delete a City with the specified id in the request
CityController.delete = (req, res) => {
  const id = req.params.id;

  City.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete City with id=${id}. Maybe City was not found!`
        });
      } else {
        res.send({
          message: "City was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete City with id=" + id
      });
    });
};


//-------------------------------------------------------------------------------------
// Delete all Cities from the database.
CityController.deleteAll = (req, res) => {
    City.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Cities were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Cities."
      });
    });
};


//-------------------------------------------------------------------------------------
// Find all published Tutorials
CityController.findAllAvailable = (req, res) => {
    City.find({ available: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Cities."
      });
    });
};

module.exports = CityController;