const express = require('express');
const router = express.Router();

//Importo Controllers
const MovieController = require("../controllers/movie.controller");
  
router.post("/", MovieController.create); // Create a new ca
router.get("/", MovieController.findAll); // Retrieve all movies
router.get("/:id", MovieController.findById); // Retrieve a single ca with id
router.get("/title/:title", MovieController.findByTitle); // EndPoint de buscar una pelicula por titulo
router.get("/genre/:genre", MovieController.findByGenre); // EndPoint de buscar una pelicula por genero
router.get("/cast/:cast", MovieController.findByCast);
// router.put("/:id", movies.update); // Update a ca with id
// router.delete("/:id", movies.delete); // Delete a ca with id
// router.delete("/", movies.deleteAll); // Create a new ca
  

module.exports = router;