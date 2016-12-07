import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

const IndividualPlaylist = React.createClass({
  getInitialState(){
    return ({playlist: []})
  },
  componentDidMount(){
    $.ajax({
      url: '/api/playlists',
      type: 'GET',
      success: ((data)=>{
        console.log(data[0].title)
        data ? this.setState({playlist: data}) : console.log('Error with playlist object')
      })
    })
  },
  render(){
    console.log('state=>', this.state.playlist)
    let displayPlaylist = this.state.playlist.map((val, idx)=>{
      return (
        <li key={idx}>
          <Link to="/indi-playlist" key={idx}>{val.title}</Link>
        </li>)
    })
    return (
      <div>
        <ol>
          {displayPlaylist}
        </ol>
      </div>
    )
  }
});

export default IndividualPlaylist;
