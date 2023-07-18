import React from "react";
// import Indexe from "./src/pages/main/layout/Index.js";
import image from "../../../../assets/images/Jonas.png";
import "./styles.scss";
import "w3-css/w3.css";

import MainNavbar from "../../layout/header";
import MainFooter from "../../layout/footer";

export const HomePage = () => {
  return (
    <div>
      <body id="home">
        <nav
          className="navbar custom-navbar navbar-expand-lg navbar-dark"
          data-spy="affix"
          data-offset-top="20"
        >
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="assets/imgs/logo.png" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#home">
                    Accueil
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    Historique
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#service">
                    Club AENF{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#portfolio">
                    A propos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#team">
                    Partenaires
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#testimonial">
                    Actualités
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Nos contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
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
