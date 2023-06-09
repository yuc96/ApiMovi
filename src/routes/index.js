const express = require('express');
const actorsRouter= require('./actors.routes');
const directorsRouter= require('./directors.routes');
const genresRouter= require('./genres.routes');
const moviesRouter=require('./movies.routes');
const router = express.Router();

// colocar las rutas aquí
router.use("/actors", actorsRouter); 
router.use("/directors", directorsRouter); 
router.use("/genres", genresRouter); 
router.use("/movies", moviesRouter); 



module.exports = router;