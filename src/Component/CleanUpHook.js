import React, { useState, useEffect } from 'react';

const CleanUpHook = () => {
	const [width, setWidth] = useState(window.screen.width);
	const changeWidth = () => {
		console.log('add event');
		setWidth(window.innerWidth);
	};
	useEffect(() => {
		window.addEventListener('resize', changeWidth);
		return () => {
			window.removeEventListener('resize', changeWidth);
		};
	});
	return (
		<div>
			<p>the actual width of screen</p>
			<h1>{width}</h1>
		</div>
	);
};

export default CleanUpHook;
