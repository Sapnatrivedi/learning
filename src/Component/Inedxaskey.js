import React from 'react';

function Inedxaskey() {
	const array2 = ['sapna', 'sapna', 'sapna', 'sapna'];
	return (
		<div>
			{array2.map((name, index) => {
				return (
					<h2 key={index}>
						{index} {name}
					</h2>
				);
			})}
		</div>
	);
}

export default Inedxaskey;
