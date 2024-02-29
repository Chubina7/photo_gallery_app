import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./History.module.css";

function History() {
  return (
    <main>
      <h1>History Page</h1>
      <NavLink to={"/"}>
        <button>Go to Home page</button>
      </NavLink>
    </main>
  );
}

export default History;
