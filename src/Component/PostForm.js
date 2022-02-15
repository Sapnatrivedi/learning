import axios from 'axios';
import React, { Component } from 'react';

class PostForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userid: '',
			title: '',
			body: '',
		};
	}
	changeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	submitHandler = (e) => {
		e.preventDefault();
		console.log(this.state);
		axios
			.post('https://jsonplaceholder.typicode.com/posts', this.state)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	render() {
		return (
			<div>
				<form action='' onSubmit={this.submitHandler}>
					<input type='text' name='userid' id='' value={this.userid} onChange={this.changeHandler} />
					<input type='text' name='title' id='' value={this.title} onChange={this.changeHandler} />
					<input type='text' name='body' id='' value={this.body} onChange={this.changeHandler} />
					<button type='submit'>Submit</button>
				</form>
			</div>
		);
	}
}

export default PostForm;
