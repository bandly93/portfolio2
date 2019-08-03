import React , { Component,Fragment } from 'react';
import StackLogo from '../containers/Logo';
import { stackData,langData } from '../data/homeData.js';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import Oakland from '../images/Oakland.png';

class Home extends Component{

	renderBanner = (text) => <div>
		<h1> {text} </h1>
	</div>
	
	main = () => <div className = 'top-home'>
		<h1> Hello, I'm Band Ly.</h1>
		<h2> I'm a self taught full-stack web developer.</h2>
		<button className = 'homeLink'> <Link to = '/projects'> View Projects </Link></button>
	</div>

	mapArray = (arr) => {
		return<ul>
			{
				arr.map((item,i) => <li key = {i}>
					<img src = {item.img}  width = "50"/>
					<p>{item.name} </p>
					<p>{item.exp} </p>
				</li>)
			}
		</ul>
	}

	render(){
		return<div className = 'home-container'>
			<div className ='bg-img'> <img src = {Oakland} /></div>
			{this.main()}
			<div className = 'homeDiv'>
				{this.renderBanner("Main Stack")}
				<hr/>
				<div id = "stackDesc"> {this.mapArray(stackData)}</div>	
				{this.renderBanner("Languages")}
				<hr />
				<div id = "longData"> {this.mapArray(langData)}</div> 
			</div>
		</div>
	}
}

export default Home;
