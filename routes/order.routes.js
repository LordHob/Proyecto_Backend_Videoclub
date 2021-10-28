const express = require('express');
const router = express.Router();

//Importo Controllers
const orders = require("../controllers/order.controller");
  
router.post("/", orders.create); // Create a new movie
router.get("/", orders.findAll); // Retrieve all orders
router.get("/available", orders.findAllAvailable); // Retrieve all available orders
router.get("/:id", orders.findOne); // Retrieve a single movie with id
router.put("/:id", orders.update); // Update a movie with id
router.delete("/:id", orders.delete); // Delete a movie with id
router.delete("/", orders.deleteAll); // Create a new movie
  

module.exports = router;