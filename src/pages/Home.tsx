import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <NavLink to={"/history"}>
        <button>Go To History Page</button>
      </NavLink>
    </div>
  );
}

export default Home;
