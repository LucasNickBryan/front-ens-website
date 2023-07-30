import React from "react";
import "./styles.scss";

export default function Header(props) {
  const { BackgroundUrl } = props;

  return (
    <div>
      <div className="HEADER_STYLES">
        <header
          className="header"
          style={{ backgroundImage: `url(${BackgroundUrl})` }}
        >
          {props.children}
        </header>
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
              <NavLink to="/personnal">
                <span className="nav-link">Personnel </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/portfolio">
                <span className="nav-link">Portfolio </span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact">
                <span className="nav-link">Contact </span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="btn">
          <button className="btn btn-outline-info">
            <strong style={{ color: "black" }}>Se connecter</strong>
          </button>
        </div>
      </div>
    </div>
  );
}
