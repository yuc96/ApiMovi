const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const genres = require('./genres');
const actors = require('./actors');
const directors = require('./directors');

const movies = sequelize.define('movies', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING
      },
      synopsis: {
        type: DataTypes.TEXT
      },
      releaseYear: {
        type: DataTypes.INTEGER
      }
});

//  La tabla pivote se llamará GenresMovies 
  movies.belongsToMany(genres, { through: 'GenresMovies' });
  genres.belongsToMany(movies, { through: 'GenresMovies' });
//  La tabla pivote se llamará MoviesActors
  movies.belongsToMany(actors, { through: 'MoviesActors' });
  actors.belongsToMany(movies, { through: 'MoviesActors' });

//  La tabla pivote se llamará MoviesDirectors
  movies.belongsToMany(directors, { through: 'MoviesDirectors' });
  directors.belongsToMany(movies, { through: 'MoviesDirectors' });



module.exports = movies;