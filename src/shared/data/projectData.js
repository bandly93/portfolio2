let placeholder = '//via.placeholder.com/150';
let usePH = false;
let fitnessImg = '../images/fitnesstrackr.png';
let volcanoImg = '../images/volcano.png';
let yelpImg = '../images/yelpcamp.png';

export const ProjectArray = [
	{	
		img : usePH ? placeholder : fitnessImg,
		title : 'FitnessTrackr',
		subTitle : 'Simple approach to tracking macronutrients intake.',
		technologies : "Stack : React.js, Node.js, Express.js, Passport.js, and PostgreSQL.",
		status : 'Dec, 2018',
		url : '//fit.blcoder.com',
		githubUrl : '//github.com/bandly93/fitnessTracker',
	},{
		img : usePH? placeholder : volcanoImg,
		title : 'VB Productions',
		subTitle : 'Photography webapp for multimedia production company.',
		technologies : "Stack : React.js, Node.js, Express.js, and MongoDB.",
		status : 'Mar, 2018',
		url : '//vp.blcoder.com/h/multimedia',
		githubUrl : '//github.com/bandly93/volcano',
	},{
		img : usePH ? placeholder : yelpImg,
		title : 'YelpCamp',
		subTitle : 'Mock media service app similar to Instagram or Flickr.',
		technologies : "Stack : Node.js, Express.js, Passport.js, Heroku, and mLab.",
		status : 'Jan, 2018',
		url : '//murmuring-anchorage-26883.herokuapp.com/',
		githubUrl : '//github.com/bandly93/yelpcamp',
	},
];
