import React, { useState } from 'react';

const CounterHookPre = () => {
	var intialvalue = 0;
	const [counter, setCounter] = useState(intialvalue);

	const changehandle = () => {
		for (let i = 0; i < 5; i++) {
			setCounter((prevCounter) => prevCounter + 1);
		}
	};
	return (
		<div>
			<h1>count: {counter}</h1>
			<button type='button' onClick={() => setCounter(intialvalue)}>
				reset
			</button>
			<button type='button' onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
				increment
			</button>
			<button type='button' onClick={() => setCounter((prevCounter) => prevCounter - 1)}>
				decrement
			</button>
			<button type='button' onClick={changehandle}>
				increment5
			</button>
		</div>
	);
};

export default CounterHookPre;
