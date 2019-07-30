import React , { Component,Fragment } from 'react';
import { ProjectArray } from '../data/projectData';
import '../styles/Project.css';

class Projects extends Component{	
	mapProjects = () => {
		return ProjectArray.map((project,i) => (
			<div className = 'project-wrapper' key = {i}>
				<div className = 'project-text'>
					<h1> {project.title} </h1>
					<p className = 'grey-out med-font'> {project.subTitle} </p>
					<p className = 'grey-out small-font'> {project.technologies} </p>
				</div>
				{
					project.githubUrl?
						<a title = "GitHub Link" href = {project.githubUrl}> <i className="fab fa-github-square"></i> </a>
					:
						null
				}
				<a title ="Website Link" href = {project.url}> <i className="fas fa-link"></i> </a>
				<div className = 'project-img' >
					<img src = {project.img} />
				</div>
				<hr/>	
			</div>
		))
	}
	
	render(){
		return<Fragment>
			{this.mapProjects()}		
		</Fragment>
	}
}

export default Projects;
