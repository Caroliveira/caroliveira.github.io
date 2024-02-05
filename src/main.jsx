import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <div>Hello world!</div>
    </Router>
  </React.StrictMode>
);
