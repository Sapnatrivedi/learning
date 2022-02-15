import React, { Component } from 'react';
import WithCounter from './WithCounter';
export class HoverCounter extends Component {
	render() {
		const { count, change } = this.props;
		return (
			<div>
				<h1 onMouseOver={change}>{count} on hover</h1>
			</div>
		);
	}
}

export default WithCounter(HoverCounter, 10 );
