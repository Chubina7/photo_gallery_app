import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import WordsHistoryProvider from "./context/wordsHistoryProvider/WordsHistoryProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
// test comment
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <WordsHistoryProvider>
        <App />
      </WordsHistoryProvider>
    </BrowserRouter>
  </React.StrictMode>
);
