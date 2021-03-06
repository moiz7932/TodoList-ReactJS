import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault(); ///this line doesnt make your page reaload
        if (!title || !desc) {
            alert("Title or Description could not be blank");
        }
        addTodo(title, desc);
    }

    return (
        <div className="container my-3 col-md-4">
            <div>
                <h3>Add a Todo</h3>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label for="title" className="form-label">Todo Title</label>
                        <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} id="title" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="desc" className="form-label">Todo Description</label>
                        <input type="text" className="form-control" value={desc} onChange={(e) => setDesc(e.target.value)} id="desc" />
                    </div>
                    <button type="submit" className="btn btn-sm btn-success">Add Todo</button><br /><br /><br />
                </form>
            </div>
        </div>
    )
}