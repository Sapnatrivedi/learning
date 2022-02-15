import React, { useState } from 'react';

const UseStateArray = () => {
	const [Name, setName] = useState([]);
	const addItem = () => {
		setName([
			...Name,
			{
				id: Name.length,
				value: Math.floor(Math.random() * 10) + 1,
			},
		]);
	};
	return (
		<div>
			<button type='button' onClick={addItem}>
				add Item
			</button>
			<ul>
				{Name.map((item) => (
					<li key={item.id}>{item.value}</li>
				))}
			</ul>
		</div>
	);
};

export default UseStateArray;
