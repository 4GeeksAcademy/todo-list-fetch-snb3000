// src/Index.js
import React, { useState } from "react"; // Import useState
import ReactDOM from "react-dom/client";
import Home from "./component/home.jsx"; // Move import to the top
import TodoList from "./TodoList"; // This import is redundant and should be removed
import "../styles/index.css";

// Render your react application
ReactDOM.createRoot(document.getElementById("app")).render(<Home />);

// TodoList component should be in its own file, e.g., TodoList.jsx
// If this is meant to be the TodoList component, then the import and export should be adjusted accordingly.

// Assuming TodoList is the intended component for this file, after moving Home import:
const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleAddTask}
      />
      <ul>
        {tasks.length === 0 ? (
          <li>No tasks, add a task</li>
        ) : (
          tasks.map((task, index) => (
            <li key={index}>
              {task}
              <span
                className="delete-icon"
                onClick={() => handleDeleteTask(index)}
              >
                &times;
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
