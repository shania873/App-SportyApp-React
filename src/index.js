import { React, StrictMode } from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";

console.log(process.env.PUBLIC_URL, "fgdfghhjkhjkhjkdfgh");
ReactDOM.render(
  <AuthProvider>
    <HashRouter basename="/App-SportyApp-React" hashType="hashbang">
      <StrictMode>
        <App />
      </StrictMode>
    </HashRouter>
    {/* <BrowserRouter basename={"/App-SportyApp-React"}>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter> */}
  </AuthProvider>,
  document.getElementById("root")
);
