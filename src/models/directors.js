const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const directors = sequelize.define('directors', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nationality: {
        type: DataTypes.STRING
      },
      image: {
        type: DataTypes.STRING
      },
      birthday: {
        type: DataTypes.DATEONLY,
      }
});

module.exports = directors;