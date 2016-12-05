//React
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';

//Files
import Navbar from './Component/Navbar'
//import Navbar from './Test'

const App = React.createClass({
	render(){
		return (
		<div>
			<Navbar />
		</div>
		)
	}
})
ReactDOM.render(
<Router history={browserHistory}>
	<Route path="/" component={App}></Route>
</Router>
,document.getElementById('app')
)
