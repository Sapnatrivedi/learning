import React from 'react';
import Tablejson from './Tablejson';
const Table = () => {
	return (
		<>
			<table class='table'>
				<thead>
					<tr>
						<th scope='col'>#</th>
						<th scope='col'>First</th>
						<th scope='col'>Last</th>
						<th scope='col'>Handle</th>
					</tr>
				</thead>
				<tbody>
					{Tablejson.map((ele) => {
						return (
							<>
								{' '}
								<tr>
									<th scope='row'>1</th>
									<td>{ele.data}</td>
									<td>{ele.data1}</td>
									<td>{ele.data3}</td>
								</tr>
							</>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default Table;
