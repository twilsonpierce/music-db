const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelizeConnection = require('./db');
const Artist = require('./models/artist-model.js');
const Song = require('./models/song-model.js');
const Genre = require('./models/genre-model.js');

//body-parser middleware adds .body property to req (if we make a POST AJAX request with some data attached, that data will be accessible as req.body)
app.use(bodyParser.urlencoded({ extended: false }));

//listen on port 8888
app.listen('9999', () => console.log('Listening on port 9999'));


//////////
// YOUR CODE HERE:
//////////

app.get('/api/artists', (req,res)=>{
	Artist.findAll()
	.then((data)=>{
		console.log(data, 'We have all the artists!');
		res.send(data);
	})
	.catch((error) =>{
	res.send(error);
	})
})

app.get('/api/artists/:id', (req,res)=>{
	Artist.findById(req.params.id)
	.then((data)=>{
		console.log(data, 'We got this artists!')
		res.send(data);
	})
	.catch((error)=>{
		console.log(error,'Error!!!!')
	})
})

app.post('/api/artists', (req,res) =>{
	Artist.create(
		{name:req.body.name})
	.then((data)=>{
		console.log(data, 'New Artists!');
		res.send(data);
	})
	.catch((error) =>{
		console.log(error,'Error!!!')
	})
})

app.delete('/api/artists/:id', (req,res)=>{
	Artist.destroy(
		{where: {id: req.params.id}})
	.then((data,error)=>{
			console.log(data, 'you deleted it!');
			res.sendStatus(200);
	})
	.catch((err)=>{
		console.log(err, 'Error!')
	})
})

app.put('/api/artists/:id/:newName', (req,res)=>{
	Artist.update(
		{name:req.params.newName},
		{where:{id:req.params.id}})
	.then((data)=>{
		res.sendStatus(200);
	})
	.catch((error) =>{
		console.log(error,'Error!!!')
	})
})


app.get('/api/songs', (req,res)=>{
	Song.findAll()
	.then((data)=>{
		console.log(data, 'we have all the songs');
		res.send(data);
	}).catch((error)=>{
		console.log(error);
	})
})

app.get('/api/songs/:id', (req, res)=>{
	Song.findById(req.params.id)
	.then((data)=>{
		res.send(data)
	})
	.catch((error)=>{
		console.log(error)
	})
})


//refactored version

app.post('/api/songs', (req, res)=>{
	let genreID;
	Genre.findOrCreate({
				where: {title: req.body.genre}
			})
		.then((genre)=>{
			genreID = genre[0].dataValues.id
			console.log(genreID)
		})

	Artist.findOrCreate({
		where: {name: req.body.artist}
	})
	.then((artist)=>{
		Song.findOrCreate({
		 where: {
			 title: req.body.song,
			 youtube_url: req.body.url,
			 artistId: artist[0].dataValues.id
			}
		})
	})
	.then((song)=>{
		 console.log(song)
		 song.addGenres([genreID])
	 })
	 .then((data) => {
		 res.senStatus(200)
	 })
	 .catch( (err) => {
		 console.log("Error with posting new song", err)
	 })
})


// app.post("/api/songs", (req, res)=>{
// 	var genreID;
//
// 	Artist.findOrCreate({
// 		where: {name: req.body.artist}
// 	})
// 	.then((artist)=>{
// 		console.log(artist, '<-- artist')
// 		 return Song.findOrCreate({
// 			where: {
// 				title: req.body.song,
// 				youtube_url: req.body.url,
// 				artistId: artist[0].dataValues.id
// 			}
// 		})
// 	})
// 	.then((song)=>{
// 		// console.log(song, '<-- This is our song object.')
// 		return Genre.findOrCreate({
// 			where: {
// 				title: req.body.genre
// 			}
// 			Genre.findOne().then(function(genre) {
// 				Globalgenre = genre
// 			})
// 		})
// 	})
// 	.then((genre)=>{
// 		console.log(genre, '<-- genre!');
// 		song.addGenres([genre[0].dataValues.id])
// 	})
// 	.catch((error)=>{
// 		console.log(error)
// 	})
// })


// app.get('/api/genre/:genre', (req, res)=>{
// 	Genre.findOne({
// 		where:
// 			{title: req.params.genre}
// 	})
// 	.then((data)=>{
// 		console.log(data.dataValues.id)
// 		res.send(data)
// 	})
// 	.catch((error)=>{
// 		console.log(error)
// 	})
// })

// first, find or create artist,
// then, we find or create song,
// then, accessor method we add artist to song
// then, we find or create genre,
// then, we add genre to song
//artist:, song:, youtubeurl:, genre: ,
//up to date changes.
