import React from "react";
import MainNavbar from "../../layout/header";
import MainFooter from "../../layout/footer";
import image2 from "../../../../assets/images/vadil.jpg";
import image3 from "../../../../assets/images/darya.jpg";
import image5 from "../../../../assets/images/andrea.jpg";

import "./styles.scss";
import "w3-css/w3.css";

const Actuality = () => {
  return (
    <div className="ACTU_STYLES">
      <MainNavbar />
      <div className="con" id="home">
        <div className="banner">
          <div className="linear"></div>
          <div className="banner-text">
            <h1>
              Association des Etudians de <br />
              l'École Normale Supérieures
            </h1>
            <br />
            <h3>Université d'Exellence et d'Innovation</h3>
            <div className="banner-button">
              <button className="btn btn-lg btn-primary btn1">Voir plus</button>
            </div>
          </div>
        </div>
      </div>
      <div className="ACTU_STYLES">
        <div className="w3-row-padding container " id="actu">
          <div className="w3-center actu">
            <h1>
              <strong>
                <span className="multicolor-text" style={{ color: "green" }}>
                  Actu
                </span>
                alité
              </strong>
            </h1>
          </div>

          <div className="w3-third w3-margin-bottom">
            <div className="w3-card-4">
              <img src={image2} alt="John" style={{ width: "100%" }} />
              <div className="w3-container">
                <h3>Foot-ball masculine</h3>
                <p className="w3-opacity">CEO & Founder</p>
                <p>
                  <button className="w3-button w3-light-grey w3-block">
                    Contact
                  </button>
                </p>
              </div>
            </div>
          </div>

          <div className="w3-third w3-margin-bottom">
            <div className="w3-card-4">
              <img src={image3} alt="Mike" style={{ width: "100%" }} />
              <div className="w3-container">
                <h3>Basket-ball féminine</h3>
                <p className="w3-opacity">Art Director</p>
                <p>
                  <button className="w3-button w3-light-grey w3-block">
                    Contact
                  </button>
                </p>
              </div>
            </div>
          </div>

          <div className="w3-third w3-margin-bottom">
            <div className="w3-card-4">
              <img src={image5} alt="Jane" style={{ width: "100%" }} />
              <div className="w3-container">
                <h3>Des sorties de promotions</h3>
                <p className="w3-opacity">Designer</p>
                <p>
                  <button className="w3-button w3-light-grey w3-block">
                    Contact
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MainFooter />
    </div>
  );
};

export default Actuality;
