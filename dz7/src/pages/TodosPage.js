import React, {useEffect, useState} from 'react';

function TodosPage(props) {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const [updateInput, setUpdateInput] = useState('');
    const [updateId, setUpdateId] = useState(null);

    async function getTodos() {
        const response = await fetch('http://localhost:8000/todos');
        const data = await response.json();
        setTodos(data)
    }

    async function createTodo(event) {
        event.preventDefault();
        setInput("")
        const todo = {
            title: input,
            status: false
        }

        const response = await fetch('http://localhost:8000/todos', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo)
        })


        if (response.ok) {
            getTodos()
        }
    }

    async function updateTodo(event) {
        event.preventDefault();
        const updatedTodo = {
            title: updateInput
        };

        const response = await fetch(`http://localhost:8000/todos/${updateId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedTodo)
        });

        if (response.ok) {
            getTodos();
            setUpdateInput('');
            setUpdateId(null);
        }
    }

    async function deleteTodo(id) {

        const response = await fetch(`http://localhost:8000/todos/${id}`, {
            method: "DELETE"
        })

        if (response.ok) {
            getTodos()
        }
    }

    async function changeStatus(id, status) {

        const todo = {
            status: status
        }

        const response = await fetch(`http://localhost:8000/todos/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo)
        })

        if (response.ok) {
            getTodos()
        }


    }

    useEffect(() => {
        getTodos()

    }, [])

    return (
        <div style={{padding: '30px'}}>
            <h1>Todos</h1>
            <form onSubmit={createTodo}>
                <input value={input} type="text" onChange={(event) => setInput(event.target.value)}/>
                <button>create todo</button>
            </form>

            <form onSubmit={updateTodo}>
                <input
                    type="text"
                    value={updateInput}
                    onChange={(event) => setUpdateInput(event.target.value)}
                />
                <button type="submit">Отправить новый todo</button>
            </form>

            {
                todos.map(todo => <p key={todo.id} className={todo.status ? 'line' : ''}>
                    <input type="checkbox"
                           checked={todo.status}
                           onChange={(event) => changeStatus(todo.id, event.target.checked)}/>
                    {todo.title}
                    <button onClick={() => deleteTodo(todo.id)}>delete</button>
                    <button onClick={() => {
                        setUpdateInput(todo.title + 'введите новый todo');
                        setUpdateId(todo.id);
                    }}>Изменить
                    </button>
                </p>)
            }
        </div>
    );
}

export default TodosPage;