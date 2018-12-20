import Home from '../components/Home';
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
