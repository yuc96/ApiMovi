const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const genres = sequelize.define('modelName', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
      }
});

module.exports = genres;