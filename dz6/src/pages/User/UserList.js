import React from 'react';

const UserList = ({ users, onDelete }) => {
	return (
		<>
			{!users.length ? <p>Список пуст</p>
				:
				<ul>
					{users.map((user, index) => (
						<li key={index}>
							<strong>Name:</strong> {user.name}<br/>
							<strong>Username:</strong> {user.username}<br/>
							<strong>Email:</strong> {user.email}<br/>
							<strong>Phone:</strong> {user.phone}<br/>
							<strong>Website:</strong> {user.website}<br/>
							<button onClick={() => onDelete(user)}>Удалить</button>
						</li>
					))}
				</ul>
			}

		</>

	);
};

export default UserList;
