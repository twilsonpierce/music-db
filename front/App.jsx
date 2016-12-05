import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,Link,broswerHistory} from'react-router';

const App = React.createClass({
	render(){
		return (
		<div>
		{this.props.children}
		</div>

		)
	}
})
ReactDOM.render(
<Router history={broswerHistory}>
	<Route path="/" component={App}>
	</Route>
</Router>
,document.getElementById('app')
)