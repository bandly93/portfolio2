import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';
import { RoutesArray } from '../data/navBarData';
import { 
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	withRouter 
} from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/NavBar.css';

class NavBar extends Component{

	routes = () => RoutesArray.map((route,i) => <Route 
		exact path = {route.url}
		component = {route.component}
		key = {i}
	/>)
	
	navbar = () => {
		return <div id = 'navbar'>
			<div id = 'navbar-left'>
				<div> <Link to ='/'> HOME </Link> </div>
			</div>
			<div id = 'navbar-right'>
				<div><Link to = '/about'> ABOUT </Link></div>
				<div><Link to = '/projects'> PROJECTS </Link></div>
				<div><Link to = '/contact'> CONTACT </Link></div>
				<div><Link to = '/resume'> RESUME </Link></div>
			</div>
		</div>
	}
	
	render(){
		return<Fragment>
			{this.navbar()}
			<Switch> 
				{ this.routes() } 
			</Switch>
		</Fragment>
	}
}

/*
const mapStateToProps = (state) => {
	
}

const mapDispatchToProps = {
	
}

NavBar.propTypes = {	
	
}
*/

//export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Navbar));

export default withRouter(NavBar);
