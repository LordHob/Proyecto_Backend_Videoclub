const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.js');

//Import Controllers
const movies = require("../controllers/movie.controller");


router.get("/", movies.findAll);
router.get("/:_id", movies.findById);
router.get("/title/:title", movies.findByTitle);
router.get("/genre/:genre", movies.findByGenre);
router.get("/cast/:cast", movies.findByCast);
// router.get("/location/:location", movies.findByLocation);
// router.get("/available/:available", movies.findByAvailability);

router.post("/", auth, movies.create);

router.put("/:_id", auth, movies.update);

router.delete("/:_id", auth, movies.delete);
router.delete("/all", auth, movies.deleteAll);


module.exports = router;


//--------------------------------------------------------------------------
//----------------------CODIGO ANTIGUO--------------------------------------
//--------------------------------------------------------------------------
// const express = require('express');
// const router = express.Router();

// //Importo Controllers
// const MovieController = require("../controllers/movie.controller");
  
// router.post("/", MovieController.create); // Endpoint para publicar nueva película
// router.get("/", MovieController.findAll); // Endpoint para mostrar todas las películas
// router.get("/:id", MovieController.findById); // Endpoint para buscar una película por ID
// router.get("/title/:title", MovieController.findByTitle); // Endpoint para buscar una pelicula por titulo
// router.get("/genre/:genre", MovieController.findByGenre); // Endpoint para buscar una pelicula por genero
// router.get("/cast/:cast", MovieController.findByCast); // Endpoint para buscar una película por reparto
// // router.put("/:id", movies.update); // Update a ca with id
// // router.delete("/:id", movies.delete); // Delete a ca with id
// // router.delete("/", movies.deleteAll); // Create a new ca
  

// module.exports = router;