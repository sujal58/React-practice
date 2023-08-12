import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, settodos] = useState([]);
  const [task, settask] = useState([]);

  function createtodo(e) {
    e.preventDefault();
    settodos((oldtodos) => {
      settask("");
      return [...oldtodos, task];
    });
  }

  let onChangeval = (e) => {
    settask(e.target.value);
  };

  return (
    <div className="App">
      <h1>TODO APP</h1>

      <form onSubmit={createtodo}>
        <input type="text" value={task} onChange={onChangeval} />
        <button type="submit" className="todobtn" onClick={createtodo}>
          Create to do
        </button>
      </form>
      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
