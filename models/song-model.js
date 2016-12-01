const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

//////////
// YOUR CODE HERE:
//////////

var Song = this.sequelizeConnection.define('song', {
	title:{
		type: Sequelize.STRING,
		validate:{
			len:[1,250]
		}
	}

	youtube_url:{
		type: Sequelize.STRING,
		validate:{
			len:[1,50],
			isUrl: true
		}
	}
});

Song.belongsTo(Artist);
Song.belongsToMany(Genre,{through:'UniqueGenres'});
Song.belongsToMany(Playlist, {through: 'Tunes'});


module.exports = Song;
