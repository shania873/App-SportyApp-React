import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function RequireAuth(props) {
  const { auth } = useAuth(props.roles);
  console.log(auth);
  return <>{auth && auth !== null ? <Outlet /> : <Outlet />}</>;
}

export default RequireAuth;
