const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

//////////
// YOUR CODE HERE:
//////////

var Genre = sequelizeConnection.define('genre', {
	title:{
		type:Sequelize.STRING
		validate:{
			len:[1,100]
		}
	}
});

Genre.belongsToMany(Song, {through: 'SongGenre'});

module.exports = Genre;
