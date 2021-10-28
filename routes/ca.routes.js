const express = require('express');
const router = express.Router();

//Importo Controllers
const cas = require("../controllers/ca.controller");
  
router.post("/", cas.create); // Create a new ca
router.get("/", cas.findAll); // Retrieve all cas
router.get("/:id", cas.findOne); // Retrieve a single ca with id
router.put("/:id", cas.update); // Update a ca with id
router.delete("/:id", cas.delete); // Delete a ca with id
router.delete("/", cas.deleteAll); // Create a new ca
  

module.exports = router;