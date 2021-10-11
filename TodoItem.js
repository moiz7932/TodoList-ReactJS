import React from 'react';
import './buttonStyle.css';

export default function TodoItem({ todo, onDelete }) {
    return (
        <div>
            <h4>{todo.sno}. {todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger my-1" onClick={() => { onDelete(todo) }}>Delete</button>
        </div>
    )
}