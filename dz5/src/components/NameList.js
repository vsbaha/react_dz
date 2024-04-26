import React from 'react';
import NameListItem from "./NameListItem";

const NameList = ({ names, onNameChange, onNameDelete }) => {
	return (
		<div>
			{names.length === 0 ? (
				<p>Список пуст</p>
			) : (
				<ul>
					{names.map((name, index) => (
						<NameListItem
							key={index}
							name={name}
							onChange={(newName) => onNameChange(index, newName)}
							onDelete={() => onNameDelete(name)}
						/>
					))}
				</ul>
			)}
		</div>
	);
};

export default NameList;
