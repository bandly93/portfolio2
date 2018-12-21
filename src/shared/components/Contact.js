import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { ContactArray } from '../data/contactData';
import { sendData } from '../redux/fetchThunk';
import '../styles/Contact.css';

class Contact extends Component{
	constructor(){
		super();
		this.state = this.getInitialState();
	}

	getInitialState = () => {
		return {
			name : '',
			email : '',
			phone : '',
			message : '',
		}
	}

	setInitialState = () => {
		this.setState(this.getInitialState());
	}

	handleSubmit = (e) => {
		e.preventDefault();
		sendData('/email','POST',this.state);
		this.setInitialState();
	}

	updateState = (e) => {
		const { name , value } = e.target;
		this.setState({[name]:value});
	}

	mapInput = () => {
		return ContactArray.map(object => <input
			key = {object.name}
			type = {object.type}
			onChange = {this.updateState}
			placeholder = {object.placeholder}
			name = {object.name}
			value = {this.state[object.name]}
			required
			/>
		)
	}

	textBox = () => (
		<textarea 
			rows = "5"
			name = 'message'
			value = {this.state['message']}
			onChange = {this.updateState} required>
		</textarea>
	)

	telephoneInput = () => (
		<input 
			type = 'tel'
			name = 'phone'
			placeholder = 'Phone'
			onChange = {this.updateState}
			value = {this.state['phone']}
			pattern = "[0-9]{3}-[0-9]{3}-[0-9]{4}"
			required
		/>
	)
	
	render(){
		return<div id = 'contact'>
			<div id = 'inner-contact'>
				<div id = 'contact-top'>
					<h1> CONTACT </h1>
					<p> Would you like to get in contact with me ? </p>
				</div>
				<div id = 'contact-input' className = 'sim'>
					{this.mapInput()}
				</div>
				<div id ='contact-telephone' className ='sim'>
					{this.telephoneInput()}
				</div>
				<div id = 'contact-textbox' className ='sim'>
					{this.textBox()}	
				</div>
				<div id = 'contact-submit'>
					<input 
						type = 'submit' 
						onClick = {this.handleSubmit} 
						value = 'SEND MESSAGE'/>
				</div>
			</div>
		</div>
	}
}


export default Contact;
