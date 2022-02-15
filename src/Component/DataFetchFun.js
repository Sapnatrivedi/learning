import axios from 'axios';
import React, { useState, useEffect } from 'react';

const DataFetchFun = () => {
	const [post, setPost] = useState([]);
	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then((res) => {
				setPost(res.data);
				console.log(res);
			})
			.catch((error) => {
				console.log(error);
			});
	});
	return (
		<div>
			<ul>
				{post.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</div>
	);
};

export default DataFetchFun;
