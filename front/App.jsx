//React
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';

//Files
import Navbar from './Component/Navbar';
import Artists from './Component/Artists.jsx';
import Songs from './Component/Songs.jsx';
import Playlist from './Component/Playlist';
import IndividualPlaylist from './Component/IndividualPlaylist';
// import CreatePlaylist from './Component/CreatePlaylist';

const App = React.createClass({
	render(){
		return (
		<div>
			<Navbar />
			{this.props.children}
		</div>
		)
	}
})

ReactDOM.render(
<Router history={browserHistory}>
	<Route path="/" component={App}>
		<Route path="/artists" component={Artists}/>
		<Route path="/songs" component={Songs}/>
		<Route path="/playlist" component={Playlist}/>
		<Route path="/indi-playlist" component={IndividualPlaylist}/>
	</Route>
</Router>
,document.getElementById('app'))



//<Route path="/create-playlist" component={CreatePlaylist}/>
