import React from 'react';
import {Link} from 'react-router';
import  css from './css/Navbar.css';


const Navbar = () => (
  <div id="navbar">
    <Link to="/artists">Artists</Link>
    <br/>
    <Link to="/songs">Songs</Link>
    <br/>
    <Link to="/playlist">Playlist</Link>
    <br/>
    <Link to="/create-playlist">Create-Playlist</Link>
  </div>
)

export default Navbar;
