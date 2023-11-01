import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function RequireAuth() {
  const { auth } = useAuth();

  const navigate = useNavigate();
  return (
    <>{auth && auth?.roles?.length > 0 ? <Outlet /> : navigate("/Login")}</>
  );
}

export default RequireAuth;
