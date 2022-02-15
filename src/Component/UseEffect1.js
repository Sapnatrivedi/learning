import React, { useState, useEffect } from 'react';

const UseEffect1 = () => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('');
	useEffect(() => {
		console.log('button clicked');
		document.title = `you clicked ${count} times`;
	}, [count]);

	return (
		<div>
			<input type='text' value={name} onChange={(e) => setName(e.target.value)} />
			<button type='button' onClick={() => setCount(count + 1)}>
				click {count} times
			</button>
		</div>
	);
};

export default UseEffect1;
