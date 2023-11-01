import React from "react";
import "./App.css";
import Home from "./components/Home/Home";

import { Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import Layout from "./components/Layout";
import Login from "./components/Login/Login";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route
          element={
            <RequireAuth roles={["ROLE_USER", "ROLE_ADMIN", "ROLE_BASIC"]} />
          }
        >
          <Route path="/Home" element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
