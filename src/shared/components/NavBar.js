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
	constructor(){
		super()
		this.state = {
			active : 'false',
		}
	}

	routes = () => RoutesArray.map((route,i) => <Route 
		exact path = {route.url}
		component = {route.component}
		key = {i}
	/>)

	navbarRight = () => <Fragment>
		<div><Link to = '/projects'> PROJECTS </Link></div>
		<div><Link to = '/contact'> CONTACT </Link></div>
		<div><Link to = '//www.github.com/bandly93' target = '_blank'> GITHUB </Link></div>
		<div><Link to = '//www.linkedin.com/in/bandly' target = '_blank'> LINKEDIN </Link></div>
		<div><Link to = '/resume'> RESUME </Link></div>	
	</Fragment>

	hamburger = () => <div>
		<img id = 'hamburger-icon' src = '../images/hamburger.svg' />
	</div>

		
	navbar = () => (
		<div id = 'navbar'>
			<div id = 'navbar-left'>
				<div><Link to ='/'> BLCODER </Link></div>
			</div>
			<div id ='navbar-right'>
				{this.navbarRight()}
			</div>
		</div>
	)


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
