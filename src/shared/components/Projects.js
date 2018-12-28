import React , { Component,Fragment } from 'react';
import { ProjectArray } from '../data/projectData';
import '../styles/Project.css';

class Projects extends Component{

	mapProjects = () => {
		return ProjectArray.map((project,i) => (
			<div className = 'project-wrapper' key = {i}>
				<div className = 'project-img'>
					<a href = {project.url}> <img src = {project.img} /></a>
				</div>
				<div className = 'project-text'>
					<h1> {project.title} </h1>
					<p className = 'grey-out med-font'> {project.subTitle} </p>
					<p className = 'grey-out small-font'> {project.technologies} </p>
					<p> <a href = {project.githubUrl}> Github </a></p>
					<p> <a href = {project.url}> Website </a></p>
				</div>
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
