import React, { useReducer } from 'react';

const UseReducerThapa = () => {
	const initialState = 0;
	const reducer = (state, action) => {
		if (action.type === 'increment') {
			return state + 1;
		} else {
			return state - 1;
		}
	};
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			<div>{state}</div>
			<button onClick={() => dispatch({ type: 'increment' })}>inc</button>
			<button onClick={() => dispatch({ type: 'decrement' })}>dec</button>
		</div>
	);
};

export default UseReducerThapa;
