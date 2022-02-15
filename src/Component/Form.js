import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			comments: '',
		};
	}

	handlenamechange = (event) => {
		this.setState({
			name: event.target.value,
		});
	};

	handlecomment = (event) => {
		this.setState({
			comments: event.target.value,
		});
	};

	handleSubmit = (event) => {
		alert(`${this.state.name} ${this.state.comments}`);
	};
	render() {
		return (
			<>
				<form action='' onSubmit={this.handleSubmit}>
					<label htmlFor=''>Name</label>
					<input type='text' value={this.state.name} name='name' onChange={this.handlenamechange} />
					<br />
					<label htmlFor=''>commnets</label>
					<textarea name='' id='' cols='30' rows='10' value={this.state.comments} onChange={this.handlecomment}></textarea>

					<button type='submit'>submit</button>
				</form>
				
			</>
		);
	}
}

export default Form;
