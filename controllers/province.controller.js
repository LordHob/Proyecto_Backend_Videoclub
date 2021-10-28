const db = require("../models");
const Province = db.provinces;

const ProvinceController = {}; //Create the object controller

//CRUD end-points Functions
//-------------------------------------------------------------------------------------
// Create and Save a new Province
ProvinceController.create = (req, res) => {
  // Validate request
  if (!req.body.nombre) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Province
  const province = new Province({
    nombre: req.body.nombre,
    cp: req.body.cp,
    poblacion: req.body.poblacion,
    superficie: req.body.superficie,
    caId: req.body.caId
  });

  // Save Province in the database
  province
    .save(province)
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
// Retrieve all provinces from the database.
ProvinceController.findAll = (req, res) => {
  const nombre = req.query.nombre;
  var condition = nombre ? { nombre: { $regex: new RegExp(nombre), $options: "i" } } : {};

  Province.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving provinces."
      });
    });
};


//-------------------------------------------------------------------------------------
// Find a single Province with an id
ProvinceController.findOne = (req, res) => {
  const id = req.params.id;

  Province.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Province with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Province with id=" + id });
    });
};


//-------------------------------------------------------------------------------------
// Update a Province by the id in the request
ProvinceController.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Province.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Province with id=${id}. Maybe Province was not found!`
        });
      } else res.send({ message: "Province was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Province with id=" + id
      });
    });
};


//-------------------------------------------------------------------------------------
// Delete a Province with the specified id in the request
ProvinceController.delete = (req, res) => {
  const id = req.params.id;

  Province.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Province with id=${id}. Maybe Province was not found!`
        });
      } else {
        res.send({
          message: "Province was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Province with id=" + id
      });
    });
};


//-------------------------------------------------------------------------------------
// Delete all provinces from the database.
ProvinceController.deleteAll = (req, res) => {
    Province.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} provinces were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all provinces."
      });
    });
};


//-------------------------------------------------------------------------------------
// Find all published Tutorials
ProvinceController.findAllAvailable = (req, res) => {
    Province.find({ available: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving provinces."
      });
    });
};

module.exports = ProvinceController;