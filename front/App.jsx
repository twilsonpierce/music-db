//React
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';

//Files
import Navbar from './Component/Navbar';
import Artists from './Component/Artists';
// import Songs from './Component/Songs';
// import Playlist from './Component/Playlist';
// import CreatePlaylist from './Component/CreatePlaylist';
// import IndividualPlaylist from './Component/IndividualPlaylist';

const App = React.createClass({
	render(){
		return (
		<div>
			<Navbar />,
			<Artists/>
		</div>
		)
	}
})

ReactDOM.render(
<Router history={browserHistory}>
	<Route path="/" component={App}>
		<Route path="/artists" component={Artists}/>
	</Route>
</Router>
,document.getElementById('app'))


// <Route path="/songs" component={Songs}/>
// 	<Route path="/playlist" component={Playlist}/>
// 	<Route path="/create-playlist" component={CreatePlaylist}/>
// 	<Route path="/individual-playlist" component={IndividualPlaylist}/>
