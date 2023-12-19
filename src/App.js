import React, { useEffect, useContext } from "react";
import "./App.css";
import Home from "./components/Home/Home";

import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./styles/app.scss";
import Layout from "./components/Layout";
import Login from "./components/Login/Login";
import RequireAuth from "./components/RequireAuth";
import useAuth from "./hooks/useAuth";
import AuthContext from "./context/AuthProvider";
import ListMyLessons from "./components/MyLessons/List-MyLessons";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/SensNonCritique-App/unauthorized"
          element={<h1>Unauthorized</h1>}
        />
        <Route
          element={
            <RequireAuth roles={["ROLE_ADMIN", "ROLE_BASIC", "ROLE_USER"]} />
          }
        >
          <Route path="/SensNonCritique-App/Login" element={<Login />} />
          <Route path="/SensNonCritique-App/Home" element={<Home />} />
          <Route
            path="/SensNonCritique-App/ListedeCours"
            element={<ListMyLessons />}
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
