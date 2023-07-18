import React from "react";
import { Outlet } from "react-router";
import "./styles.css";

function Main() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Main;
