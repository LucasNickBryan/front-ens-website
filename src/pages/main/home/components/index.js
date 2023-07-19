import React from "react";
// import Indexe from "./src/pages/main/layout/Index.js";

import "./styles.scss";
// import "w3-css/w3.css";

import MainNavbar from "../../layout/header";
import MainFooter from "../../layout/footer";

export const HomePage = () => {
  return (
    <div>
      <body id="home">
        <MainNavbar />
        <header className="header">
          <div className="overlay">
            <h2>Université de Fianarantsoa</h2>
            <h3 className="title"> ENS Fianarantsoa</h3>
            <h4 className="subtitle">
              Association des Etudiants Normaliens Fianarantsoa{" "}
            </h4>

            <div className="buttons text-center">
              <a href="#service" className="btn btn-primary rounded w-lg btn">
                Contactez nous
              </a>
              {/* <a href="#contact" className="btn btn-outline-light rounded w-lg btn-lg my-1">Contactez nous</a> */}
            </div>
          </div>
        </header>
      </body>
      <MainFooter />
    </div>
  );
};
