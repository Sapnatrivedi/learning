import React, { useContext } from 'react';
import ComC from './ComC';
import { FirstName, LastName } from '../App';
const ComB = () => {
	const fname = useContext(FirstName);
	const lastname = useContext(LastName);
	return (
		<div>
			<h1>
				hello i am {fname} and last name is {lastname}
			</h1>
		</div>
	);
};

export default ComB;
