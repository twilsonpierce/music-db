const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

//////////
// YOUR CODE HERE:
//////////
var Artist = sequelizeConnection.define('artist', {
	name: {
		type: Sequelize.STRING,
		validate: {
			len:[1,100]
		}
	}
});
module.exports = Artist;
