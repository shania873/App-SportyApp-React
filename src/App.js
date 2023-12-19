import React from "react";
import "./App.css";
import Home from "./components/Home/Home";

import { Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import Layout from "./components/Layout";
import Login from "./components/Login/Login";
import RequireAuth from "./components/RequireAuth";

import ListMyLessons from "./components/MyLessons/List-MyLessons";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="unauthorized" element={<h1>Unauthorized</h1>} />
        <Route
          element={
            <RequireAuth roles={["ROLE_ADMIN", "ROLE_BASIC", "ROLE_USER"]} />
          }
        >
          <Route path="/App-SportyApp-React/Login" element={<Login />} />
          <Route path="/App-SportyApp-React/Home" element={<Home />} />
          <Route
            path="/App-SportyApp-React/ListedeCours"
            element={<ListMyLessons />}
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
