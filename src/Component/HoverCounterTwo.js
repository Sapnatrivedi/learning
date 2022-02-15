import React, { Component } from 'react';

export class HoverCounterTwo extends Component {
	render() {
		const { count, incrementCount } = this.props;
		
		return (
			<div>
				<button type='button' onClick={incrementCount}>
					clicked {count} times
				</button>
			</div>
		);
	}
}

export default HoverCounterTwo;
