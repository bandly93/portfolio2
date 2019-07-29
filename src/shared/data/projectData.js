import fitnessImg from '../images/fitnesstrackr.png';
import volcanoImg from '../images/volcano.png';
import yelpImg from '../images/yelpcamp.png';
import dockImg from '../images/dockpad.png';

export const ProjectArray = [
	{
		img : dockImg,
		imageFolder : "DockPad",
		title : 'DockPad.io',
		subTitle: 'The solution to efficient project management.',
		technologies : 'Stack : React.js, Redux.js, Google Firebase, Google Material UI',
		status : 'Initial MVP stage',
		url : '//dockpad.io',
		githubUrl : null,
	},
	{	
		img : fitnessImg,
		imageFolder : "Fitness",
		title : 'FitnessTrackr',
		subTitle : 'Simple approach to tracking macronutrients intake.',
		technologies : "Stack : React.js, Node.js, Express.js, Passport.js, and PostgreSQL.",
		status : 'Dec, 2018',
		url : '//fit.blcoder.com',
		githubUrl : '//github.com/bandly93/fitnessTracker',
	},{
		img : volcanoImg,
		imageFolder : "Volcano",
		title : 'VB Productions',
		subTitle : 'Photography webapp for multimedia production company.',
		technologies : "Stack : React.js, Node.js, Express.js, and MongoDB.",
		status : 'Mar, 2018',
		url : '//vp.blcoder.com/h/multimedia',
		githubUrl : '//github.com/bandly93/volcano',
	},{
		img : yelpImg,
		imageFolder : "Yelp",
		title : 'YelpCamp',
		subTitle : 'Mock media service app similar to Instagram or Flickr.',
		technologies : "Stack : Node.js, Express.js, Passport.js, Heroku, and mLab.",
		status : 'Jan, 2018',
		url : '//murmuring-anchorage-26883.herokuapp.com/',
		githubUrl : '//github.com/bandly93/yelpcamp',
	},
];
