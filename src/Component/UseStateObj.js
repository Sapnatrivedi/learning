import React, { useState } from 'react';

const UseStateObj = () => {
	const [name, setName] = useState({ first: '', last: '' });
	return (
		<div>
			<input type='text' value={name.first} id='' onChange={(e) => setName({ ...name, first: e.target.value })} />
			<h1>first name is: {name.first}</h1>
			<input type='text' value={name.last} id='' onChange={(e) => setName({ ...name, last: e.target.value })} />
			<h1>lastname name is: {name.last}</h1>
		</div>
	);
};

export default UseStateObj;
