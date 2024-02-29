import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <header>
      <h1>Header</h1>
    </header>
    <App />
    <footer>
      <h1>Footer</h1>
    </footer>
  </React.StrictMode>
);
