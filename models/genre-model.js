const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Song = require('./song-model.js');

//////////
// YOUR CODE HERE:
//////////

var Genre = sequelizeConnection.define('genre', {
	title:{
		type: Sequelize.STRING,
		validate: {
			len:[1,100]
		}
	}
});

// Genre.belongsToMany(Song, {through: 'UniqueGenres'})
//genre does not have song id.


module.exports = Genre;
