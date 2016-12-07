import React from 'react';
import $ from 'jquery';


const Artists = React.createClass({
	getInitialState(){
		return ({artists: []})
	},
	componentDidMount(){
		$.ajax({
			url:'/api/artists',
			type: 'GET',
			success: ((data)=>{
				console.log(data);
				console.log(data[0].name);
				data ? this.setState({artists:data}) : console.log('Error with artists object')
			})
		})
	},
	render(){
		let ArtistDisplay = this.state.artists.map((value, index)=>{
			return <li key={index}><h1>{value.name}</h1></li>
		})
		console.log(this.state.artists, 'this is artists')
		return (
		<div>
		<h1> Artist Page ! </h1>
		{ArtistDisplay}
		</div>
		)
	}
})


export default Artists;