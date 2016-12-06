import React from 'react';
import $ from 'jquery';

const Artists = React.createClass({
getInitialState(){
	return ({artists: []})
},
componentDidMount(){
var that = this;
	$.ajax({
		url: '/api/artists',
		type:'GET',
		success:((data)=>{
			console.log('data', data);
		//console.log('name', data[0].name);
			data ? that.setState({artists:data}): console.log("error");
		})
	},
	render(){
		let displayArtists= this.state.artists.map((value, i)=>{
			<li key={i}>{value.name}</li>
		})
			console.log('displayartist',displayArtists);

		return (
		<div>
			<h1> Artists!! </h1>
			<ol>
				{displayArtists}
			</ol>
		</div>
		)
	}
})

export default Artists;
