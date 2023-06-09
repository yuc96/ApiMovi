const { getAll, create, getOne, remove, update,addMovieToActor, addMovieToDirector, addMovieToGenre} = require('../controllers/movies.controlleres');
const express = require('express');

const routerName = express.Router();

routerName.route('/')
    .get(getAll)
    .post(create);

routerName.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

routerName.route('/:id/actors')
.post(addMovieToActor);   

routerName.route('/:id/directors')
.post( addMovieToDirector);  

routerName.route('/:id/genres')
.post( addMovieToGenre);  

module.exports = routerName;