import React , { Component,Fragment } from 'react';
import StackLogo from '../containers/Logo';

class Home extends Component{
	topSection = () => (
		<div>
			<h1> A little about me! </h1>
			<p> I am a full-stack web developer based in Oakland,CA. During my freetime I like to work out and go out to bars with my friends. I also enjoy having friends over and cooking meals that I've seen on youtube. If you had any interactions with me, you know that I love spicy food and tend to incorporate heat into my cooking. My favorite meal to cook is medium-rare rib-eye steak with a spicy tangy sauce for dipping.</p>
		</div>
	)
	
	middleSection = () => (
		<div>
			<h1> How I got into web development! </h1>
			<p> During my time at a consulting firm, I had the privilege to oversee a data intensive project that required tons of manual data entry. After each data-entry session our statistical software would fail to compile because of inconsistencies that lie within our dataset. Frustrated by how tedious it was to look for errors, I researched online for a solution and found a neat tool called SQL. There I learned how to write scripts that revealed inconsistencies within the dataset. A task that used to take us hours to fix now only takes a few minutes. Effectively reducing the amount of errors we send to the following revision by 99%. This was beneficial to our company because we were able to finish the revision process more quickly and most importantly with fewer errors. Fascinated by the results, I decided that I would pursue a software engineering path and web development would best suit my ambitions. </p>
		</div>
	)

	bottomSection = () => (
		<div>
			<h1> Main Stack </h1>
			<ul>
				<li> React.js </li>
				<li> Redux.js </li>
				<li> MongoDB / PostgreSQL </li>
				<li> Express.js </li>
				<li> Node.js </li>
			</ul>
		</div>
	)

	render(){
		return<Fragment>
			{this.topSection()}
			{this.middleSection()}
			{this.bottomSection()}
		</Fragment>
	}
}

export default Home;
