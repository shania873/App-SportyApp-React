import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";

console.log(process.env.PUBLIC_URL);
ReactDOM.render(
  <AuthProvider>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById("root")
);
