const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Song = require('./song-model');

// create the Song model
var Playlist = sequelizeConnection.define('playlist', {
  title: {
    type: Sequelize.STRING,
    validate: {
      len: [1, 100]
    }
  }
});


//there are a few other ways we can do this:
// Song.belongsTo(Artist); // artistId will be added to Song model
// Song.hasOne(Artist); //songId will be added on Artist model
// Song.hasMany(Artist, {as: 'Artists'}); //songIds will be added to Artist

//this will automatically create a new table called 'song_genres'
Playlist.belongsToMany(Song, { through: 'playlist_song'});
Song.belongsToMany(Playlist, { through: 'playlist_song'});

module.exports = Playlist;
