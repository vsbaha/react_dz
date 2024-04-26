import React from 'react';

const NameListItem = ({ name, onChange, onDelete }) => {
	return (
		<li>
			{name}
			<input
				type="text"
				value={name}
				onChange={onChange}
			/>
			<button onClick={onDelete}>Убрать</button>
		</li>
	);
};

export default NameListItem;
