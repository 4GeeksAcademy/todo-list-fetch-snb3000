import React from "react";
export const TodoList = ({ todos, getTodoList, apiUrl }) => {
  const deleteTodo = async (id) => {
    let response = await fetch(apiUrl + "/todos/" + id, {
      method: "DELETE",
    });
    if (response.ok) {
      getTodoList();
    } else {
      console.log("error");
      alert("error");
    }
  };
  return (
    <div className="text-center">
      <ul>
        {todos.map((item, index) => (
          <li>
            {item.label}{" "}
            <button className="btn" onClick={() => deleteTodo(item.id)}>
              <i class="fa-regular fa-trash-can"></i>
            </button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};
