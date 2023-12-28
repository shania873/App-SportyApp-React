import { React, StrictMode } from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";

console.log(process.env.PUBLIC_URL, "fgdfghhjkhjkhjkdfgh");
ReactDOM.render(
  <AuthProvider>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById("root")
);
