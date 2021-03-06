import React, { useState, useEffect } from 'react';

const HooksMouse = () => {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	const logMousePosition = (e) => {
		setX(e.clientX);
		setY(e.clientY);
	};
	useEffect(() => {
		window.addEventListener('mousemove', logMousePosition);
	});
	return (
		<div>
			X -{x} y-{y}
		</div>
	);
};

export default HooksMouse;
