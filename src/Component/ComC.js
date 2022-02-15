import React from 'react';
import { FirstName, LastName } from '../App';

const ComC = () => {
	return (
		<>
			<FirstName.Consumer>
				{(fname) => {
					return (
						<LastName.Consumer>
							{(lastname) => {
								return (
									<h1>
										{' '}
										hello this is {fname} {lastname}
									</h1>
								);
							}}
						</LastName.Consumer>
					);
				}}
			</FirstName.Consumer>
		</>
	);
};

export default ComC;
