import React, { Component } from 'react';

export class CounterTwo extends Component {
	render() {
		const { count, incrementCount } = this.props;
		return (
			<div>
				<h2 onMouseOver={incrementCount}>hovered {count} time</h2>
			</div>
		);
	}
}

export default CounterTwo;
