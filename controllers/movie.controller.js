const db = require("../models");
const Movie = db.movies;

const MovieController = {}; //Create the object controller


//CRUD end-points Functions

//---- GET ----------------------------------------------------------------------------
// Retrieve all Movies from the database.

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
          err.message || "Some error occurred while retrieving all movies."
      });
    });
};

//-------------------------------------------------------------------------------------
// Find a single movie with an id.

MovieController.findById = (req, res) => {
  const _id = req.params._id;

  Movie.findById(_id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Could not find a movie with id: " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Movie with id=" + id });
    });
};

//-------------------------------------------------------------------------------------
// Find all movies with specific title.

MovieController.findByTitle = (req, res) => {
  const title = req.params.title;

  Movie.find({ title: title })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Could not find a movie with the title: " + title });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Movie with title= " + title });
    });
};

//-------------------------------------------------------------------------------------
// Find all movies of the specific genre.

MovieController.findByGenre = (req, res) => {
  const genre = req.params.genre;

  Movie.find({ genre: genre })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Could not find a movie of the genre " + genre });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Movie with genre= " + genre });
    });
};

//-------------------------------------------------------------------------------------
// Find all movies by cast.

MovieController.findByCast = (req, res) => {
  const cast = req.params.cast;

  Movie.find({ cast: cast })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Could not find a movie with cast: " + cast });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving movie with cast= " + cast });
    });
};

//-------------------------------------------------------------------------------------
// Find all movies from a specific location.

MovieController.findByLocation = (req, res) => {
  const location = req.params.location;

  Movie.find({ location: location })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Could not find a movie with location: " + location });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving movie with location= " + location });
    });
};

//-------------------------------------------------------------------------------------
// Find all movies by availability.

MovieController.findByAvailability = (req, res) => {
  const available = req.params.available;

  Movie.find({ available: available })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Could not find a movie with available: " + available });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving movie with available= " + available });
    });
};


//--- POST ----------------------------------------------------------------------------
// Create and Save a new movie.

MovieController.create = (req, res) => {
  // Validate request

  if (req.user.user.superUser == true) {

    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }

    // Create a Movie
    const movie = new Movie({
      title: req.body.title,
      genre: req.body.genre,
      cast: req.body.cast,
      location: req.body.location,
      available: req.body.available ? req.body.available : false
    });

    // Save Movie in the database
    movie
      .save(movie)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  }
  else {
    res.send({
      message: "You don't have permissions to create a new movie entry."
    });
  }
};

//-------------------------------------------------------------------------------------
// Update a Movie by the id in the request



MovieController.update = (req, res) => {

  if (req.user.user.superUser == true) {

    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
    const _id = req.params._id;

    Movie.findByIdAndUpdate(_id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Movie with id=${_id}. Maybe Movie was not found!`
          });
        } else res.send({ message: "Movie was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Movie with id=" + _id
        });
      });
  }
  else {
    res.send({
      message: "You don't have permissions to modify any movie entry."
    });
  }
};


//--- DELETE --------------------------------------------------------------------------
// Delete a Movie with the specified id in the request

MovieController.delete = (req, res) => {

  if (req.user.user.superUser == true) {

    const _id = req.params._id;

    console.log(_id);

    Movie.findByIdAndRemove(_id, { useFindAndModify: false })
      .then(data => {

        if (!data) {
          res.status(404).send({
            message: `Cannot delete Movie with id=${_id}. Maybe Movie was not found!`
          });
        } else {
          res.send({
            message: "Movie was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Movie with id=" + _id
        });
      });
  }
  else {
    res.send({
      message: "You don't have delete a movie entry."
    });
  }
};


//-------------------------------------------------------------------------------------
// Delete all Movies from the database.
MovieController.deleteAll = (req, res) => {

  if (req.user.user.superUser == true) {

    Movie.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Movies were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Movies."
        });
      });
  }
  else {
    res.send({
      message: "You don't have permissions to delete all entries."
    });
  }
};


module.exports = MovieController;

//-------------------CODIGO ANTIGUO---------------------------------
//------------------------------------------------------------------
// const db = require("../models");
// const Movie = db.movies;

// const MovieController = {}; //Create the object controller

// //CRUD end-points Functions
// //-------------------------------------------------------------------------------------
// // Create and Save a new Ca
// MovieController.create = (req, res) => {

//   if (req.user.user.rol == "admin") {// HACEMOS QUE SOLO PUEDA CREARLO EL ADMINISTRADOR
//   // Validate request
    
//   if (!req.body.title) {
//     res.status(400).send({ message: "Content can not be empty!" });
//     return;
//   }

//   // Create a Movie
//   const movie = new Movie({
//     title: req.body.title,
//     genre: req.body.genre,
//     cast: req.body.cast,
//     year: req.body.year,
//   });

//   // Save movie in the database
//   movie
//     .save(movie)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the ca."
//       });
//     });
//   } else {
//     res.send({
//       message: `No tienes permisos para borrar peliculas. Contacta con un administrador.`
//     });
//   }
// };


// //-------------------------------------------------------------------------------------
// // Retrieve all ca from the database.
// MovieController.findAll = (req, res) => {
//   const title = req.query.title;
//   var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

//   Movie.find(condition)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving movie"
//       });
//     });
// };


// //-------------------------------------------------------------------------------------
// // Find a single movie with an id
// MovieController.findById = (req, res) => {
//   const id = req.params.id;

//   Movie.findById(id)
//     .then(data => {
//       if (!data)
//         res.status(404).send({ message: "Not found movie with id " + id });
//       else res.send(data);
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .send({ message: "Error retrieving movie with id=" + id });
//     });
// };
// //-------------------------------------------------------------------------------------
// // Find a single movie by title

// MovieController.findByTitle = (req, res) => {

//   const title = req.params.title;
//   Movie.findOne({ title: title })
//     .then(data => {
//       if (!data)
//         res.status(404).send({ message: "Not found movie with title " + title });
//       else res.send(data);
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .send({ message: "Error retrieving movie with title" + title });
//     });
// };

// //-------------------------------------------------------------------------------------
// // Find a single movie by genre

// MovieController.findByGenre = (req, res) => {

//   const genre = req.params.genre;
//   Movie.findOne({ genre: genre })
//     .then(data => {
//       if (!data)
//         res.status(404).send({ message: "Not found Movie with genre " + id });
//       else res.send(data);
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .send({ message: "Error retrieving Movie with genre=" + id });
//     });
// };

// //-------------------------------------------------------------------------------------
// // Find a single Movie by cast

// MovieController.findByCast = (req, res) => {

//   const cast = req.params.cast;
//   Movie.findOne({ cast: cast })
//     .then(data => {
//       if (!data)
//         res.status(404).send({ message: "Not found Movie with cast " + cast });
//       else res.send(data);
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .send({ message: "Error retrieving Movie with cast" + cast });
//     });
// };

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



// module.exports = MovieController;