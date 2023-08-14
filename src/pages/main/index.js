import React from "react";
import { Outlet } from "react-router";
import "./styles.scss";
import MainNavbar from "./layout/navbar";
import MainFooter from "./layout/footer";

function Main() {

  return (
    <div className="MAIN_STYLES">
      <MainNavbar />
      <Outlet />
      <MainFooter />
    </div>
  );
}

export default Main;
