import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';
import { RoutesArray } from '../data/navBarData';
import hamburger from '../images/hamburger.svg';
import { 
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	withRouter 
} from 'react-router-dom';
import '../styles/NavBar.css';

class NavBar extends Component{
	constructor(){
		super()
		this.state = {
			clicked : false,
		}
	}
	
	clickHome = () =>{
		const { clicked } = this.state;
		this.setState({clicked:false});
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

	navHome = () => <div onClick = {this.clickHome}>
		<Link to = '/'> BLCODER </Link>
	</div>
	
	navbarRight = () => {
		const { clicked } = this.state;
		return <div id = 'nav-right' className = { clicked? 'show' : 'hide'} onClick = {this.handleClick}>
			<div><Link to = '/projects'> Projects </Link></div>
			<div><Link to = '/contact'> Contact </Link></div>
			<div><Link to = '//www.github.com/bandly93' target = '_blank'> Github </Link></div>
			<div><Link to = '//www.linkedin.com/in/bandly' target = '_blank'> LinkedIn </Link></div>
			<div><Link to = '/resume'> Resume </Link></div>	
		</div>
	}

	hamburger = () => {
		const { clicked } = this.state;
		return 	<div id = 'nav-hamburger' className = {clicked? 'hide' : 'show'}>
			<img 
				onClick = {this.handleClick}
				id = 'hamburger-icon'
				src = {hamburger} />
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

export default withRouter(NavBar);
