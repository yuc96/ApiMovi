const catchError = require('../utils/catchError');
const movies = require('../models/movies');
const actors= require('../models/actors');
const directors=require('../models/directors');
const genres= require('../models/genres');

const getAll = catchError(async(req, res) => {
    const resp = await movies.findAll({
        include: [
        {
            model: genres,
            required: false // Join externo
        },
        {
            model: actors,
            required: false // Join externo
        },
        {
            model: directors,
            required: false // Join externo
        }
        ]
    })
    return res.json(resp);
});

const create = catchError(async(req, res) => {
    const result = await movies.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await movies.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await movies.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await movies.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});
// Relaciono los Actores con las Peliculas
const addMovieToActor = catchError(async (req, res) => {
        const {id} = req.params;
    // Obtener las instancias del actor y la película
        const movie = await movies.findByPk(id);
    // Insertar la relación en la tabla pivote
        await movie.addActors(req.body);
        const actors= await movie.getActors();
        return res.status(200).json({ 
        actors,
        message: 'Relación agregada exitosamente' 
    });
  });

  const addMovieToDirector = catchError(async (req, res) => {
    const {id} = req.params;
// Obtener las instancias del actor y la película
    const movie = await movies.findByPk(id);
// Insertar la relación en la tabla pivote
    await movie.addDirectors(req.body);
    const actors= await movie.getDirectors();
    return res.status(200).json({ 
    actors,
    message: 'Relación agregada exitosamente' 
});
});
const addMovieToGenre = catchError(async (req, res) => {
    const {id} = req.params;
// Obtener las instancias del genero y la película
    const movie = await movies.findByPk(id);
// Insertar la relación en la tabla pivote
    await movie.addGenres(req.body);
    const actors= await movie.getGenres();
    return res.status(200).json({ 
    actors,
    message: 'Relación agregada exitosamente' 
});
});
 
module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    addMovieToActor,
    addMovieToDirector,
    addMovieToGenre
}