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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          element={
            <RequireAuth roles={["ROLE_USER", "ROLE_ADMIN", "ROLE_BASIC"]} />
          }
        >
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
