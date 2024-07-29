import React, { useEffect, useState } from "react";
import { TodoList } from "./TodoList.jsx";
import { InputTodos } from "./InputTodos.jsx";

//create your first component
const Home = () => {
  const [todos, setTodos] = useState([]);
  const apiUrl = "https://playground.4geeks.com/todo";
  const createTodolist = async () => {
    let response = await fetch(apiUrl + "/users/snb3000", {
      method: "POST",
    });
    if (response.ok) {
      let data = await response.json();
      console.log(data);
      return true;
    } else {
      console.log("error");
      return false;
    }
  };
  const getTodolist = async () => {
    let response = await fetch(apiUrl + "/users/snb3000");
    if (response.status === 200) {
      let data = await response.json();
      console.log(data);
      setTodos(data.todos);
      return true;
    } else if (response.status === 404) {
      let result = await createTodolist();
      if (result) {
        getTodolist();
      } else {
        console.log("error creating todolist");
        return false;
      }
    } else {
      console.log("error getting todolist");
      return false;
    }
  };
  useEffect(() => {
    getTodolist();
  }, []);
  return (
    <div className="text-center">
      <h1>Todo List</h1>
      <InputTodos getTodoList={getTodolist} apiUrl={apiUrl} />
      <TodoList todos={todos} getTodoList={getTodolist} apiUrl={apiUrl} />
    </div>
  );
};

export default Home;
