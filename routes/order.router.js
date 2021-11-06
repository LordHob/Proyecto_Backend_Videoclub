const express = require('express');
const router = express.Router();
// const auth = require('../middlewares/auth.js');

//Import Controllers
const orders = require("../controllers/order.controller");


router.post("/", orders.create);
router.get("/", orders.findAll);
router.delete("/:_id", orders.delete);


module.exports = router;

//--------------------------------------------------------------------------
//----------------------CODIGO ANTIGUO--------------------------------------
//--------------------------------------------------------------------------
// const express = require('express');
// const router = express.Router();

// //Importo Controllers
// const OrderController = require("../controllers/order.controller");
  
// router.post("/", OrderController.create); // Create a new order
// router.get("/", OrderController.findAll); // Retrieve all orders
// // router.get("/available", orders.findAllAvailable); // Retrieve all available orders
// // router.get("/:id", orders.findOne); // Retrieve a single movie with id
// // router.put("/:id", orders.update); // Update a movie with id
// // router.delete("/:id", orders.delete); // Delete a movie with id
// // router.delete("/", orders.deleteAll); // Create a new movie
  

// module.exports = router;