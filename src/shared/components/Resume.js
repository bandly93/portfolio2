import React,{ Component,Fragment }  from 'react';
import { Document,Page } from 'react-pdf';
import '../styles/Resume.css';

class Resume extends Component{
	render(){
		return<div>
			<img id = 'resume' src = '../images/resume.png' />
		</div>
	}	
}

export default Resume;
