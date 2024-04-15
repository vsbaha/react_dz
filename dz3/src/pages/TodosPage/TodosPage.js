import React from 'react';
import style from "./todos.module.css"
import ToDo from "../../components/todo/ToDo";


const lists = ["todo 1", "todo 2", "todo 3"]

function TodosPage(props) {
	return (
		<div className={style.todos}>
			{lists.map((el, index) => <ToDo key={index} list={el}/>)}
		</div>
	);
}

export default TodosPage;