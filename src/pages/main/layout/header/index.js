import React from "react";
import "./styles.scss";
import { NavLink } from "react-router-dom";

export default function MainNavbar() {
  return (
    <div className="NAVBAR_STYLES">
      <header>
        <input type="checkbox" nameName="" id="toggler" />
        <label for="toggler" className="fa fa-bars"></label>
        <NavLink to="/bn" className="logo">
          AEENS <span>.</span>
        </NavLink>

        <nav className="navbar">
          <ul>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <li>Accueil</li>
            </NavLink>
            <NavLink to="/actuality" style={{ textDecoration: "none" }}>
              <li>Actualité</li>
            </NavLink>
            <NavLink to="/history" style={{ textDecoration: "none" }}>
              <li>Historique</li>
            </NavLink>
            <NavLink to="/personnal" style={{ textDecoration: "none" }}>
              <li>Personnel</li>
            </NavLink>
            <NavLink to="/dsd" style={{ textDecoration: "none" }}>
              <li>Contact</li>
            </NavLink>
          </ul>
        </nav>
        <div className="btn">
          <button>Se connecter</button>
        </div>
      </header>
    </div>
  );
}

// export default Index;
