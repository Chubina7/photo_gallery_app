import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import WordsHistoryProvider from "./context/wordsHistoryProvider/WordsHistoryProvider";
import DataHistoryProvider from "./context/dataHistoryProvider/DataHistoryProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataHistoryProvider>
        <WordsHistoryProvider>
          <App />
        </WordsHistoryProvider>
      </DataHistoryProvider>
    </BrowserRouter>
  </React.StrictMode>
);
