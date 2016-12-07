import React from 'react';
import $ from 'jquery';

const Songs = React.createClass({
	getInitialState(){
		return ({songs: []})
	},
	componentDidMount(){
		$.ajax({
			url: '/api/songs',
			type: 'GET',
			success: ((data)=>{
				console.log(data);
				data ? this.setState({songs:data}) : console.log('Error is with song data')
			})
		})
	},
	render(){
		let DisplaySongs = this.state.songs.map((value,index)=>{
	 		console.log('song page');
		})
		console.log(this.state.songs, 'this is songs')
		return (
		<div>
			<h1> Song Page </h1>
			{DisplaySongs}
		</div>

		)
	}
})

export default Songs; 