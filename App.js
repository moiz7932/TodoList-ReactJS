import logo from './logo.svg';
import './App.css';
import Header from "./My Components/Header";
import Footer from "./My Components/Footer";
import Todos from "./My Components/Todos";
import { AddTodo } from "./My Components/AddTodo";
import React, { useState } from 'react';

function App() {
    const onDelete = (todo) => {
        console.log("I am ondelete od todo", todo);

        setTodos(todos.filter((e) => {
            return e !== todo;
        }))
    }

    const addTodo = (title, desc) => {
        console.log("I am addind this todo", title, desc)
        let sno = todos[todos.length - 1].sno + 1;
        const myTodo = {
            sno: sno,
            title: title,
            desc: desc,
        }
        setTodos([...todos, myTodo]);
        console.log(myTodo);
    }

    const [todos, setTodos] = useState([
        {
            sno: 1,
            title: "Go to the market",
            desc: "Go to the market to get some vegetable"
        },

        {
            sno: 2,
            title: "Go to the mall",
            desc: "Go to the maall to get some shirts"
        },

        {
            sno: 3,
            title: "Go to the gym",
            desc: "Go to the gym to get some exercise done"
        }
    ]);
    return (
        <>
            <Header title="Todos List" searchBar={true} />
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
            <Footer />
        </>
    );
}

export default App;
