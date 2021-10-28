const express = require('express');
const router = express.Router();

//Importo Controllers
const provinces = require("../controllers/province.controller");
  
router.post("/", provinces.create); // Create a new movie
router.get("/", provinces.findAll); // Retrieve all provinces
router.get("/available", provinces.findAllAvailable); // Retrieve all available provinces
router.get("/:id", provinces.findOne); // Retrieve a single movie with id
router.put("/:id", provinces.update); // Update a movie with id
router.delete("/:id", provinces.delete); // Delete a movie with id
router.delete("/", provinces.deleteAll); // Create a new movie
  

module.exports = router;