import React from "react";
import { Outlet } from "react-router";
import "./styles.scss";

function Main() {
  return (
    <div className="MAIN_STYLES">
      <Outlet />
    </div>
  );
}

export default Main;
