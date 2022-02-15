import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';

function AddInput() {
	const [fields, setFields] = useState([{ value: 0 }]);

	function handleChange(i, event) {
		const values = [...fields];
		values[i].value = event.target.value;
		setFields(values);
	}

	function handleAdd() {
		const values = [...fields];
		values.push({ value: null });
		setFields(values);
	}

	function handleRemove(i) {
		const values = [...fields];
		values.splice(i, 1);
		setFields(values);
	}

	return (
		<div className='App'>
			<h1>Hello CodeSandbox</h1>

			<button type='button' onClick={() => handleAdd()}>
				+
			</button>

			{fields.map((field, idx) => {
				return (
					<div key={`${field}-${idx}`}>
						<Form />
						<button type='button' onClick={() => handleRemove(idx)}>
							X
						</button>
					</div>
				);
			})}
		</div>
	);
}

export default AddInput;
