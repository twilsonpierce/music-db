const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

//////////
// YOUR CODE HERE:
//////////

var Playlist = this.sequelizeConnection.define('playlist'{
	title:{
		type:Sequelize.STRING,
		validate:{
			len:[1,100]
		}
	}
});

Playlist.belongsToMany(Song, {through: 'SongPlaylist'});

module.exports = Playlist;
