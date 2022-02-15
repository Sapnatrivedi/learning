import React from 'react';
import '../App.css';

const Cssstyling = (props) => {
	let className = props.primary ? 'primary' : '';

	return (
		<>
			<h1 className={`${className} font-xl`}> hello this is style </h1>
		</>
	);
};

export default Cssstyling;
