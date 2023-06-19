import React, { useState } from "react";

function Form(props) {
    const [name, setName] = useState("");

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
    }

    function alertAddTask() {
        alert("New Task Added !");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    Have a new task?
                </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                placeholder="let's get started"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg" onClick={alertAddTask}>
                Add
            </button>
        </form>
    );
}

export default Form;