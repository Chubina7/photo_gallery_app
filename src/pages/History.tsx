import React from "react";
import { NavLink } from "react-router-dom";

function History() {
  return (
    <div>
      <h1>History Page</h1>
      <NavLink to={"/"}>
        <button>Go to Home page</button>
      </NavLink>
    </div>
  );
}

export default History;
