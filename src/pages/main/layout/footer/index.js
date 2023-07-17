import React from "react";
import "./styles.scss";
import "w3-css/w3.css";

export default function MainFooter() {
  return (
    <div className="FOOTER_STYLES">
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
