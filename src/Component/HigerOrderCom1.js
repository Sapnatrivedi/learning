import React, { Component } from 'react';
import WithCounter from './WithCounter';
export class HigerOrderCom1 extends Component {
	x;

	render() {
		const { count, change } = this.props;
		return (
			<div>
				<button type='button' onClick={change}>
					{this.props.name} {count} time
				</button>
			</div>
		);
	}
}

export default WithCounter(HigerOrderCom1, 5);
