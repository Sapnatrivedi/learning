import React, { useState } from 'react';

const UseHook = () => {
	const [name, setName] = useState('my name is sapna trivedi');
	const change = () => {
		setName('this is updated state');
	};
	return (
		<div>
			<h1>{name}</h1>
			<button type='button' onClick={change}>
				click me
			</button>
		</div>
	);
};

export default UseHook;
