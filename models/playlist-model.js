const Sequelize = require('sequelize');
const sequelizeConnection = require
('../db');
const Song = require('./song-model.js')

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

Playlist.belongsToMany(Song, {through: 'Playlist_Songs'});
Song.belongsToMany(Playlist, {through: 'Playlist_Songs'});


module.exports = Playlist;
