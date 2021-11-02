const db = require("../models");
const Movie = db.movies;

const MovieController = {}; //Create the object controller

//CRUD end-points Functions
//-------------------------------------------------------------------------------------
// Create and Save a new Ca
MovieController.create = (req, res) => {

  if (req.user.user.rol == "admin") {// HACEMOS QUE SOLO PUEDA CREARLO EL ADMINISTRADOR
  // Validate request
    
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Movie
  const movie = new Movie({
    title: req.body.title,
    genre: req.body.genre,
    cast: req.body.cast,
    year: req.body.year,
  });

  // Save movie in the database
  movie
    .save(movie)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ca."
      });
    });
  } else {
    res.send({
      message: `No tienes permisos para borrar peliculas. Contacta con un administrador.`
    });
  }
};


//-------------------------------------------------------------------------------------
// Retrieve all ca from the database.
MovieController.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Movie.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving movie"
      });
    });
};


//-------------------------------------------------------------------------------------
// Find a single movie with an id
MovieController.findOne = (req, res) => {
  const id = req.params.id;

  Movie.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found movie with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving movie with id=" + id });
    });
};
//-------------------------------------------------------------------------------------
// Find a single movie by title

MovieController.findByTitle = (req, res) => {

  const title = req.params.title;
  Movie.findOne({ title: title })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found movie with title " + title });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving movie with title" + title });
    });
};

//-------------------------------------------------------------------------------------
// Find a single movie by genre

MovieController.findByGenre = (req, res) => {

  const genre = req.params.genre;
  Movie.findOne({ genre: genre })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Movie with genre " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Movie with genre=" + id });
    });
};

//-------------------------------------------------------------------------------------
// Find a single Movie by cast

MovieController.findByCast = (req, res) => {

  const cast = req.params.cast;
  Movie.findOne({ cast: cast })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Movie with cast " + cast });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Movie with cast" + cast });
    });
};

//-------------------------------------------------------------------------------------
// Update a Ca by the id in the request
// MovieController.update = (req, res) => {
//   if (!req.body) {
//     return res.status(400).send({
//       message: "Data to update can not be empty!"
//     });
//   }

//   const id = req.params.id;

//   Movie.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
//     .then(data => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot update Ca with id=${id}. Maybe Ca was not found!`
//         });
//       } else res.send({ message: "Ca was updated successfully." });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error updating Ca with id=" + id
//       });
//     });
// };


//-------------------------------------------------------------------------------------
// Delete a Ca with the specified id in the request
// MovieController.delete = (req, res) => {
//   const id = req.params.id;

//   Movie.findByIdAndRemove(id, { useFindAndModify: false })
//     .then(data => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot delete Ca with id=${id}. Maybe Ca was not found!`
//         });
//       } else {
//         res.send({
//           message: "Ca was deleted successfully!"
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Could not delete Ca with id=" + id
//       });
//     });
// };


//-------------------------------------------------------------------------------------
// Delete all Ca from the database.
// MovieController.deleteAll = (req, res) => {
//     Movie.deleteMany({})
//     .then(data => {
//       res.send({
//         message: `${data.deletedCount} Ca were deleted successfully!`
//       });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all Ca."
//       });
//     });
// };



module.exports = MovieController;