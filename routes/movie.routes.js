const express = require('express');
const router = express.Router();

//Importo Controllers
const MovieController = require("../controllers/movie.controller");
  
router.post("/", MovieController.create); // Endpoint para publicar nueva película
router.get("/", MovieController.findAll); // Endpoint para mostrar todas las películas
router.get("/:id", MovieController.findById); // Endpoint para buscar una película por ID
router.get("/title/:title", MovieController.findByTitle); // Endpoint para buscar una pelicula por titulo
router.get("/genre/:genre", MovieController.findByGenre); // Endpoint para buscar una pelicula por genero
router.get("/cast/:cast", MovieController.findByCast); // Endpoint para buscar una película por reparto
// router.put("/:id", movies.update); // Update a ca with id
// router.delete("/:id", movies.delete); // Delete a ca with id
// router.delete("/", movies.deleteAll); // Create a new ca
  

module.exports = router;