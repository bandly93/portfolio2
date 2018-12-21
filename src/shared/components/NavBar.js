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
			clicked : false,
		}
	}

	handleClick = () => {
		const { clicked } = this.state;
		this.setState({clicked:!clicked});
	}

	routes = () => RoutesArray.map((route,i) => <Route 
		exact path = {route.url}
		component = {route.component}
		key = {i}
	/>)

	navHome = () => <div>
		<Link to = '/'> BLCODER </Link>
	</div>
	
	navbarRight = () => {
		const { clicked } = this.state;
		return <div id = 'nav-right' className = { clicked? 'show' : 'hide'} onClick = {this.handleClick}>
			<div><Link to = '/projects'> PROJECTS </Link></div>
			<div><Link to = '/contact'> CONTACT </Link></div>
			<div><Link to = '//www.github.com/bandly93' target = '_blank'> GITHUB </Link></div>
			<div><Link to = '//www.linkedin.com/in/bandly' target = '_blank'> LINKEDIN </Link></div>
			<div><Link to = '/resume'> RESUME </Link></div>	
		</div>
	}

	hamburger = () => {
		const { clicked } = this.state;
		return 	<div id = 'nav-hamburger' className = {clicked? 'hide' : 'show'}>
			<img 
				onClick = {this.handleClick}
				id = 'hamburger-icon'
				src = '../images/hamburger.svg' />
		</div>
	}

	navbar = () => <div id = 'navbar'>
		<div id = 'navbar-left'>
			{this.navHome()}
		</div>
		<div id ='navbar-right'>
			{this.navbarRight()}
			{this.hamburger()}	
		</div>
	</div>

	render(){
		return<Fragment>
			{this.navbar()}
			<Switch> 
				{this.routes()} 
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
