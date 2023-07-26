import React, { useEffect } from "react";
import { Outlet } from "react-router";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

function Main() {
  let navigate = useNavigate()
  useEffect(() => {
    localStorage.getItem("user_token") && navigate("/admin");
  }, [])

  return (
    <div className="MAIN_STYLES">
      <Outlet />
    </div>
  );
}

export default Main;
