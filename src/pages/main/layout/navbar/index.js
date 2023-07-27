import React, { useEffect, useState } from "react";
import "./styles.scss";
import { NavLink } from "react-router-dom";
import logo1 from "../../../../assets/images/imgs/logo.PNG";

export default function MainNavbar() {
  function toggler(e) {
    // alert("toggle");

    var me = document.getElementById("navbarSupportedContent");
    if (me.className === "navbt_nb") {
      me.className = "navbt_nb toggle_nb";
      me.style.height = "0";
    } else {
      me.className = "navbt_nb";
      me.style.height = "auto";
    }
  }

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrolled = scrollTop !== 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="NAVBAR_STYLES">
      <nav className="navbar custom-navbar navbar-expand-lg navbar-dark affix">
        <div className={isScrolled ? "scrolled" : "not-scrolled"}>
          {/* Contenu de votre application */}
        </div>
        <div className="container">
          <div className="top_nv">
            <a className="navbar-brand" href="#qsdds">
              <img src={logo1} alt="" />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={(e) => toggler(e)}
            >
              <span></span>
            </button>
          </div>

          <div className="navbt_nb" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="/">
                  <span className="nav-link">Accueil </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/actuality">
                  <span className="nav-link">Actualité </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/history">
                  <span className="nav-link">Historique </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/club">
                  <span className="nav-link">Club ANF </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/staff">
                  <span className="nav-link">Personnel </span>
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink to="/portfolio">
                  <span className="nav-link">Portfolio </span>
                </NavLink>
              </li> */}

              <li className="nav-item">
                <NavLink to="/contact">
                  <span className="nav-link">Contact </span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="btn">
            <button className="btn btn-primary">
              <strong>Se connecter</strong>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

// export default Index;
