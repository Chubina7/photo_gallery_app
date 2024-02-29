import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import History from "./pages/historyPage/History";
import Home from "./pages/homePage/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/history" Component={History} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
