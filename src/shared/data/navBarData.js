import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Resume from '../components/Resume';

export const RoutesArray = [
	{
		url : '/',
		text : 'HOME',
		component : Home,
	},
	{	
		url : '/about',
		text : 'ABOUT',
		component : About
	},
	{
		url : '/projects',
		text : 'PROJECTS',
		component : Projects,
	},
	{
		url : '/contact',
		text : 'CONTACT',
		component : Contact,
	},
	{
		url : '/resume',
		text : 'RESUME',
		component : Resume,
	},
];
