import React,{ Component,Fragment }  from 'react';
import { Document,Page } from 'react-pdf';
import '../styles/Resume.css';

class Resume extends Component{
	constructor(){
		super()
		this.state = {
			numPages : null,
			pageNumber : 1,
		}
	}
		
	onDocumentLoadSuccess = ({ numPages }) => {
		this.setState ({numPages});
	}

	render(){
		const { pageNumber,numPages } = this.state;
		return<Fragment>
			<Document
				id = "react-canvas" 
				file = '../images/resume.pdf'
				onLoadSuccess = {this.onDocumentLoadSuccess}>
				<Page pageNumber ={pageNumber} />
			</Document>
		</Fragment>
	}	
}

export default Resume;
