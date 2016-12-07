const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelizeConnection = require('./db');
const Artist = require('./models/artist-model.js');
const Song = require('./models/song-model.js');
const Genre = require('./models/genre-model.js');


//This app file will not be used using express instead it will be excluded

app.use(express.static(path.join(__dirname, '/front/bundle')));

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

app.delete('`/api/artists/:id', (req,res)=>{
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

//======================================================================
//refactored version

app.post('/api/songs', (req, res)=>{
	let genreID;
	return Genre.findOrCreate({
		where: {title: req.body.genre}
	})
	.then((genre)=>{
		genreID = genre[0].dataValues.id
	})
	.then(()=>{
		return Artist.findOrCreate({
		where: {name: req.body.artist}
		})
	})
	.then((artist)=>{
		return Song.findOrCreate({
		 where: {
			 title: req.body.song,
			 youtube_url: req.body.url,
			 artistId: artist[0].dataValues.id
			}
		})
	})
	.then((song)=>{
		console.log('song ====> CHECK:', song)
	  song[0].addGenres([genreID])
		console.log('checking song.addgenres:',song.addGenre)
	 })
})

app.get('/api/genre/:genre', (req, res)=>{
	Genre.findOne({
		where:
			{title: req.params.genre}
	})
	.then((data)=>{
		console.log(data.dataValues.id)
		res.send(data)
	})
	.catch((error)=>{
		console.log(error)
	})
})

app.put('/api/songs/:id/:newTitle', (req,res) =>{
	Song.update({title:req.params.title}, {where:{id:req.params.id}})
	.then((data)=>{
		console.log(data, 'I updated the song title by their id')
		res.send(data);
	}).catch((error)=>{
		res.send(error, 'Error!!');
	})
})

app.delete('/api/songs/:id', (req,res)=>{
	Song.destroy({where:{id:req.params.id}})
	.then((data)=>{
		console.log(data,'I just deleted the folowing song');
		res.send(data);
	}).catch((error) =>{
		res.send(error, 'Error!');
	})
})

app.get('/api/playlists', (req,res)=>{
	Playlist.findAll()
	.then((data)=>{
		console.log(data, 'I have all the playlists!');
		res.send(data);
	}).catch((error)=>{
		res.send(error, 'Error!');
	})
})

app.get('/api/playlists/:id', (req,res)=>{
	Playlist.findById({id:req.params.id})
	.then((data)=>{
		console.log(data, 'I found this playlist!');
		res.send(data);
	}).catch((error)=>{
		res.send(error, 'Error!');
	})
})

app.post('/api/playlists', (req, res)=>{
	let songID;
	Song.findOne({
		where: {
			title: req.body.song
		}
	})
	.then((song)=>{
		songID = song.dataValues.id
		console.log('SONG ==>',song)
		console.log('SONG ID==>',songID)
	})
		.then(()=>{
			return Playlist.findOrCreate({
			where: {
				title: req.body.playlist
			}
		})
	})
	.then((playlist)=>{
		console.log('playlist =====>', playlist)
		playlist[0].addSongs([songID])
	})
})

app.post('/api/genres', (req,res)=>{
	Genre.create({title:req.body.title})
		.then((data)=>{
			res.send(data);
			console.log('you just created a new genre!', data)
		}).catch((error)=>{
			res.send(error);
			console.log('Error!!!')
		})
})


app.delete('/api/playlists/:id', (req,res)=>{
	Playlist.destroy({where:{id:req.params.id}})
	.then((data)=>{
		console.log(data, 'I just deleted this playlists');
		res.send(data);
	}).catch((error)=>{
		res.send(error, 'Error!!');
	})
})

app.get('/api/genres', (req,res)=>{
	Genre.findAll()
	.then((data)=>{
		console.log(data, 'this is all the of genres');
		res.send(data);
	}).catch((error)=>{
		res.send(error, 'Error!');
	})
})

app.get('/api/genres/:id/:newGenre', (req,res)=>{
	Genre.update({title:req.params.title}, {where:{id:req.params.id}})
	.then((data)=>{
		console.log(data, 'I updated the song title by their id')
		res.send(data);
	}).catch((error)=>{
		res.send(error, 'Error!!');
	})
})

//THIS IS OUR FRONT-END
app.get('/*', (req,res)=>{
	res.sendFile(path.join(__dirname, 'front/index.html'));
})


//I JUST UPDATED THIS NOW
