// src/Index.js
import React, { useState } from "react"; // Import useState
import ReactDOM from "react-dom/client";
import Home from "./component/home.jsx"; // Move import to the top
import "../styles/index.css";

// Render your react application
ReactDOM.createRoot(document.getElementById("app")).render(<Home />);

// TodoList component should be in its own file, e.g., TodoList.jsx
// If this is meant to be the TodoList component, then the import and export should be adjusted accordingly.

// Assuming TodoList is the intended component for this file, after moving Home import:
