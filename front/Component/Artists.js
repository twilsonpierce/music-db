import React from 'react';
import $ from 'jquery';

const Artists = React.createClass({
	getInitialState(){
		return ({artists: []})
	},
	componentDidMount(){
		$.ajax({
			url:'/api/artists',
			type:'GET',
			success: ((data)=>{
				console.log('data=>', data)
				//  this.setState({artists: data})
				data ? this.setState({artists: data}) : console.log('Error in data object!s')
			})
		})
	},
	render(){
		console.log('current state of artist:', this.state.artists)
		return (
			<div>Hello!</div>
		)
	}
})

// const Artists = React.createClass({
// 	getInitialState(){
// 		return ({artists: []})
// 	},
// 	componentDidMount(){
// 		let that = this;
// 		$.ajax({
// 			url: '/api/artists',
// 			type:'GET',
// 			success:((data)=>{
// 			console.log('data', data);
// 		//console.log('name', data[0].name);
// 			data ? that.setState({artists:data}): console.log("error");
// 		})
// 	},
// 	render(){
// 		let displayArtists= this.state.artists.map((value, i)=>{
// 			<li key={i}>{value.name}</li>i
// 		})
// 			console.log('displayartist',displayArtists);
//
// 		return (
// 		<div>
// 			<h1> Artists!! </h1>
// 			<ol>
// 			</ol>
// 		</div>
// 		)
// 	}
// })

export default Artists;
