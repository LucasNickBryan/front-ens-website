import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./styles.scss";
import "w3-css/w3.css";

export default function MainNavbar() {
  return (
    <div className="NAVBAR_STYLES">
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar navbar-expand-lg fixed-top nav"
        style={{ backgroundColor: "  #00004d" }}
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav container">
            <Nav
              className="me-auto nav-item navbar-dark"
              style={{ fontSize: "15px" }}
            >
              <Nav.Link
                href="#features"
                className="nav-link mr-3 text-white mr-6"
              >
                <strong>AEENSS</strong>
              </Nav.Link>
              <Nav.Link href="#pricing" className="nav-link ml-4 text-white">
                <strong>Accueil</strong>
              </Nav.Link>
              <Nav.Link href="#pricing" className="nav-link ml-2 text-white">
                <strong>Actualité</strong>
              </Nav.Link>
              <Nav.Link href="#pricing" className="nav-link ml-2 text-white">
                <strong>Historique</strong>
              </Nav.Link>
              <Nav.Link href="#pricing" className="nav-link me-2 text-white">
                <strong>Contactez-nous</strong>
              </Nav.Link>

              <div className="navbt-resp">
                <button className="btn btn-default con">Connexion</button>
                <button className="btn btn-default insc">S'inscrire</button>
              </div>

              <div className="navbt-resp2 ">
                <button className="btn btn-default con">Connexion</button>
                <button className="btn btn-default insc">S'inscrire</button>
              </div>
            </Nav>
            <Nav></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

// export default Index;
