import React from 'react';
import { useForm } from 'react-hook-form';

const UserForm = ({ onSubmit }) => {
	const { register, handleSubmit, reset, formState: {errors} } = useForm();

	const submitHandler = (data) => {
		onSubmit(data);
		reset();
	};

	return (
		<form onSubmit={handleSubmit(submitHandler)}>
			<input type="text" placeholder="Name" {...register('name', {required:true})} />
			{errors.name && <p>Поле является обязательным</p>}
			<input type="text" placeholder="Username" {...register('username', {required:true})} />
			{errors.username && <p>Поле является обязательным</p>}
			<input type="text" placeholder="Email" {...register('email', {required:true})} />
			{errors.email && <p>Поле является обязательным</p>}
			<input type="number" placeholder="Phone" {...register('phone', {required:true})} />
			{errors.phone && <p>Поле является обязательным</p>}
			<input type="text" placeholder="Website" {...register('website')} />
			<button type="submit">Создать</button>
			<button type="button" onClick={reset}>Очистить таблицу</button>
		</form>
	);
};

export default UserForm;
