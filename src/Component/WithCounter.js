import React from 'react';

const WithCounter = (OriginalComponent, NewValue) => {
	class NewComponent extends React.Component {
		constructor(props) {
			super(props);

			this.state = {
				count: 0,
			};
		}
		change = () => {
			this.setState((prevState) => {
				return { count: prevState.count + NewValue };
			});
		};
		render() {
			return <OriginalComponent count={this.state.count} change={this.change} {...this.props} />;
		}
	}
	return NewComponent;
};

export default WithCounter;
