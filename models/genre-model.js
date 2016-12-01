const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

// create the Artist model
var Genre = sequelizeConnection.define('genre', {
  title: {
    type: Sequelize.TEXT,
    validate: {
      len: [1, 50]
    }
  }
});


module.exports = Genre;
