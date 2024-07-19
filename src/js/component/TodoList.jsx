import React from "react";
export const TodoList = ({ todos }) => {
  return (
    <div className="text-center">
      <ul>
        {todos.map((item, index) => (
          <li>{item.label}</li>
        ))}
      </ul>
    </div>
  );
};
