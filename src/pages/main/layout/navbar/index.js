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

      <footer>
        <div className="container">
          <div className="footer">
            <div className="row">
              <div className="col-md-6 col-lg-5 col-12 ft1">
                <h3>Name of creator of website</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci, quibusdam.
                </p>
              </div>
              <div className="col-md-6 col-lg-3 col-12 ft2">
                <h3>Name of all our link</h3>
                <ul>
                  <li>
                    <a href="#">Accueil</a>
                  </li>
                  <li>
                    <a href="#">Actualité</a>
                  </li>
                  <li>
                    <a href="#">Historique</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-4 col-12 ft3">
                <h3>Name of our contact</h3>
                <ul>
                  <li>Whatsapp</li>
                  <li>Mail</li>
                  <li>Télégrame</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// export default Index;
