import React from 'react';

const InputName = ({ value, onChange, onAdd, disabled }) => {
	return (
		<div>
			<input
				type="text"
				value={value}
				onChange={onChange}
				placeholder="Введите ваше имя"
			/>
			<button onClick={onAdd} disabled={disabled}>Добавить</button>
		</div>
	);
};

export default InputName;
