import React from 'react';
import $ from 'jquery';

const Artist = React.createClass({

getInitialState(){
	return ({artists: []})
},
ComponentDidMount(){
let this = that;
	$.ajax({
		url: '/api/artists',
		type:'GET',
		success: ((data)=>{
			console.log(data, 'this is the data!!!');
			data ? return that.setState({artists:data}): console.log("error");
		})
	})
},
	render(){
		// let displayArtists = this.state.artists.map((value, index)=>{
		// 	console.log()
		// })
		return (
		<div>
		
		</div>

		)
	}
})