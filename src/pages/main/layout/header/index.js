import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./styles.scss";

export default function MainNavbar() {
  return (
    <div className="NAVBAR_STYLES">
      <header>
        <input type="checkbox" nameName="" id="toggler" />
        <label for="toggler" className="fa fa-bars"></label>
        <a href="#" className="logo">
          AEENS <span>.</span>
        </a>
        <nav className="navbar">
          <a href="#home">Accueil</a>
          <a href="#actu">Actualité</a>
          <a href="#histo">Historique</a>
          <a href="#perso">Personnel</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="btn">
          <button>Se connecter</button>
        </div>
      </header>
    </div>
  );
}

// export default Index;
