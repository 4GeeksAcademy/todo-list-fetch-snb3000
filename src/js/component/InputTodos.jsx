import React, { useState } from "react";

export const InputTodos = ({ getTodoList, apiUrl }) => {
  const [todo, setTodo] = useState("");
  const addTodo = async (e) => {
    if (e.key == "Enter" && todo !== "") {
      console.log(todo);
      let response = await fetch(apiUrl + "/todos/snb3000", {
        method: "POST",
        body: JSON.stringify({
          label: todo,
          is_done: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        getTodoList();
      } else {
        console.log("error");
        alert("error");
      }
    }
  };
  return (
    <div>
      <input
        onKeyDown={(e) => addTodo(e)}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
      />
    </div>
  );
};
