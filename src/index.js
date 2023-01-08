import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import MainApp from "./components/MainApp/MainApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);

