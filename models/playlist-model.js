const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Genre = require('./genre-model.js')

//////////
// YOUR CODE HERE:
//////////

var Playlist = sequelizeConnection.define('playlist',{
	title:{
		type: Sequelize.STRING,
		validate:{
			len:[1,100]
		}
	}
});

// Playlist.belongsToMany(Genre, {through: 'UniqueGenres'});
//playlist should have genre id. 

module.exports = Playlist;
