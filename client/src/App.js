/* npm i @babel/plugin-proposal-private-property-in-object @babel/plugin-transform-private-property-in-object @apollo/client graphql */

import React from 'react';
import {gql, useQuery} from '@apollo/client';

const query = gql`
	query GetTodosWithUser {
		getTodos {
			id
			title
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
			<div className="d-flex justify-content-between align-items-center">
				<h3 className="mb-0">Todos</h3>
				<a href="http://192.168.11.128:8000/graphql" target="_blank">
					<button className="btn btn-primary">GraphQL</button>
				</a>
			</div>
			<hr/>
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
