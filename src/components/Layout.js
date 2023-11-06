import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Menu from "./Menu";
const Layout = () => {
  let location = useLocation();

  return (
    <main className="App">
      {location.pathname !== "/Login" && <Menu />}

      <div className="main-container">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
