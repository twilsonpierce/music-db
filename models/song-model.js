const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Artist = require('./artist-model.js');
const Genre = require('./genre-model.js');
const Playlist = require('./playlist-model.js');

//////////
// YOUR CODE HERE:
//////////

var Song = sequelizeConnection.define('song', {
	title:{
		type: Sequelize.STRING,
		validate:{
			len:[1,250]
		}
	},
	youtube_url: {
		type: Sequelize.STRING,
		validate:{
			len:[1,50],
			isUrl: true
		}
	}
});

Song.belongsTo(Artist);
Song.belongsToMany(Genre,{through:'UniqueGenres'});
// Song.belongsToMany(Playlist, {through: 'UniquePlaylist'});


module.exports = Song;
