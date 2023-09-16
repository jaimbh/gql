/* npm i @babel/plugin-proposal-private-property-in-object @babel/plugin-transform-private-property-in-object @apollo/client graphql */

import React from 'react';
import {gql, useQuery} from '@apollo/client';

const query = gql`
	query GetTodosWithUser {
		getTodos {
			id
			title
			completed
			user {
				id
				name
				username
				email
				phone
				website
			}
		}
	}
`;

export default function App() {
	const {data, loading} = useQuery(query);
	
	if(loading) return <h1>Loading...</h1>
	
	return (
		<>
		<div className="container p-5">
		<center><h3>Todos</h3></center><hr/>
		<div className="px-5">
			<table className="table">
				<thead>
					<tr>
						<th scope="col">User ID</th>
						<th scope="col">User</th>
						<th scope="col">Username</th>
						<th scope="col">Title</th>
						<th scope="col">Email</th>
						<th scope="col">Phone</th>
						<th scope="col">Website</th>
					</tr>
				</thead>
				<tbody>
				
				{data.getTodos.map((todo) => (
				    <tr key={todo.id}>
						<td>{todo?.user?.id}</td>
						<td>{todo?.user?.name}</td>
						<td>{todo?.user?.username}</td>
						<td>{todo.title}</td>
						<td>{todo?.user?.email}</td>
						<td>{todo?.user?.phone}</td>
						<td>{todo?.user?.website}</td>
					</tr>
				))}
					
				</tbody>
			</table>
		</div>
		</div>
		</>
	);
}