import React from "react";

const UserTable = (props) => {
	const { isLoading, users } = props;

	return (
		<>
			{isLoading ? <p>Loading...</p> : null}
			{users ? (
				<table>
					<thead>
						<tr>
							{users.headers.map((header) => {
								return <th key={header}>{header}</th>;
							})}
						</tr>
					</thead>
					<tbody>
						{users.users.map((user) => {
							return (
								<tr key={user.name}>
									<td>{user.name}</td>
									{user.purchasePoints.map((points, i) => {
										return <td key={`${points}-${i}`}>{points}</td>;
									})}
									<td>{user.totalPoints}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			) : null}
		</>
	);
};

export default UserTable;
