import React,{ Component,Fragment }  from 'react';
import { Document,Page } from 'react-pdf';
import '../styles/Resume.css';
import resume from '../images/resume.png';

class Resume extends Component{
	render(){
		return<div>
			<img id = 'resume' src = {resume} />
		</div>
	}	
}

export default Resume;
