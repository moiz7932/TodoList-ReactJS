import React from 'react';
import TodoItem from './TodoItem';

export default function Todos(props) {
    return (
        <div>
            <h3>Todos List</h3>
            {props.todos.length === 0 ? "No Todos to Display" :
                props.todos.map((todo) => {
                    return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                })
            }
        </div>
    )
}
