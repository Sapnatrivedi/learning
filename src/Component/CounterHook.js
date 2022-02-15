import React, { useState } from 'react';

const CounterHook = () => {
	const [count, setCount] = useState(0);

	const changeVal = () => {
		setCount(count + 1);
	};
	return (
		<div>
			<h1>{count}</h1>
			<button type='button' onClick={changeVal}>
				click me counter
			</button>
		</div>
	);
};

export default CounterHook;
