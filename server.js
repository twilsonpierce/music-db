const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelizeConnection = require('./db');

//body-parser middleware adds .body property to req (if we make a POST AJAX request with some data attached, that data will be accessible as req.body)
app.use(bodyParser.urlencoded({ extended: true }));

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
}).catch((error) =>{
	console.log(error, 'Error!!!');
})


app.get('/api/artists/:id', (req,res)=>{
	Artist.findById(req.params.id)
	.then((data)=>{
		console.log(data, 'We got this artists!')
		res.send(data);
	})
}).catch((error)=>{
	console.log(error,'Error!!!!')
})

app.post('/api/artists', (req,res) =>{
	Artist.create({name:req.body.name}).then((data)=>{
		console.log(data, 'New Artists!');
		res.send(data);
	})
}).catch((error) =>{
	console.log(error,'Error!!!')
})

app.put('/api/artists/:id/newName', (req,res)=>{
	Artist.update({name:req.body.name},{where:{id:req.params.id}})
	.then((data)=>{
		console.log(data, 'Artist is update!!')
	})
})