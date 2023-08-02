import React, { useEffect } from "react";
import { Outlet } from "react-router";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import MainNavbar from "./layout/navbar";
import MainFooter from "./layout/footer";

function Main() {
  let navigate = useNavigate()
  // useEffect(() => {
  //   localStorage.getItem("user_token") && navigate("/admin");
  // }, [])

  return (
    <div className="MAIN_STYLES">
      <MainNavbar />
      <Outlet />
      <MainFooter />
    </div>
  );
}

export default Main;
