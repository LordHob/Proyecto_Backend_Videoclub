const express = require('express');
const router = express.Router();

//Importo Controllers
const movies = require("../controllers/movie.controller");
  
router.post("/", movies.create); // Create a new ca
router.get("/", movies.findAll); // Retrieve all movies
router.get("/:id", movies.findOne); // Retrieve a single ca with id
router.put("/:id", movies.update); // Update a ca with id
router.delete("/:id", movies.delete); // Delete a ca with id
router.delete("/", movies.deleteAll); // Create a new ca
  

module.exports = router;