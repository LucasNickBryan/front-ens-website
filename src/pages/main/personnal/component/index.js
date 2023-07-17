import React from "react";
import MainNavbar from "../../layout/header";
import MainFooter from "../../layout/footer";
import image2 from "../../../../assets/images/Jonas.png";
import image3 from "../../../../assets/images/hicks.jpg";
import image5 from "../../../../assets/images/andrea.jpg";

import "./styles.scss";
import "w3-css/w3.css";

const Personnal = () => {
  return (
    <div className="PERSO_STYLES">
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
          <div className="w3-center perso">
            <h1>
              <strong>
                <span className="multicolor-text" style={{ color: "green" }}>
                  Perso
                </span>
                nnels
              </strong>
            </h1>
          </div>

          <div className="w3-third w3-margin-bottom">
            <div className="w3-card-4">
              <img
                src={image2}
                alt="John"
                style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <span style={{ fontSize: "25px", fontWeight: "bolder" }}>
                Anicet BELTRANE
              </span>
              <br />
              <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
                Le président de l'AEENS
              </span>
              <br />
              <span style={{ fontSize: "20px" }}>
                M1 Mathématique Classique{" "}
              </span>
            </div>
          </div>

          <div className="w3-third w3-margin-bottom">
            <div className="w3-card-4">
              <img src={image3} alt="Mike" style={{ width: "100%" }} />
            </div>

            <h3 style={{ textAlign: "center" }}>
              Le vice président de l'AEENS
            </h3>
          </div>

          <div className="w3-third w3-margin-bottom">
            <div className="w3-card-4">
              <img src={image5} alt="Jane" style={{ width: "100%" }} />
            </div>
            <h3 style={{ textAlign: "center" }}>La traisorière de l'AEENS</h3>
          </div>
        </div>
      </div>
      <MainFooter />
    </div>
  );
};

export default Personnal;
