const express = require('express');
const router = express.Router();

//Importo Controllers
const cities = require("../controllers/city.controller");
  
router.post("/", cities.create); // Create a new city
router.get("/", cities.findAll); // Retrieve all cities
router.get("/available", cities.findAllAvailable); // Retrieve all available cities
router.get("/:id", cities.findOne); // Retrieve a single city with id
router.put("/:id", cities.update); // Update a city with id
router.delete("/:id", cities.delete); // Delete a city with id
router.delete("/", cities.deleteAll); // Create a new city
  

module.exports = router;