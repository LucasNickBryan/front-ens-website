import React from "react";
// import Indexe from "./src/pages/main/layout/Index.js";
import image from "../../../../assets/images/Jonas.png";
import images from "../../../../assets/images/images.png";
import image2 from "../../../../assets/images/vadil.jpg";
import image3 from "../../../../assets/images/darya.jpg";
import image4 from "../../../../assets/images/vasily.jpg";
import image5 from "../../../../assets/images/andrea.jpg";
import "./styles.scss";
import "w3-css/w3.css";

import MainNavbar from "../../layout/header";
import MainFooter from "../../layout/footer";

export const HomePage = () => {
  return (
    <div className="HOME_STYLES">
      <MainNavbar />
      <div className="con" id="home">
        <div className="banner">
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
      <div className="w3-row" style={{ backgroundColor: "#e6eeff" }}>
        <div className="w3-col l6 ">
          <img
            src={image}
            className="w3-round w3-image w3-opacity-min"
            alt="Menu"
            style={{ width: "100%", paddingTop: "6%" }}
          />
        </div>
        <div className="w3-left w3-col m6 " style={{ backgroundColor: "" }}>
          <p
            className="texte"
            style={{ fontSize: "20px", paddingTop: "10%", paddingRight: "4%" }}
          >
            <span>
              <strong
                className="multicolor-text"
                style={{ fontFamily: "'Roboto Slab', serif", fontSize: "40px" }}
              >
                Anicet BELTRANE
              </strong>{" "}
            </span>
            <br /> <br />
            Le quarante quatrième Président des États-Unies d'Amérique. <br />
            Fondateur du mouvement « En Marche ! », créé le 6 avril 2016, il l’a
            dirigé jusqu’à sa première victoire à l’élection présidentielle, le
            7 mai 2017. Le 24 avril 2022, Emmanuel Macron est réélu Président de
            la République.
            <br />
          </p>
          <div className="btn btn-success btn-lg">En savoir plus</div>
        </div>
      </div>

      <div className="w3-row-padding container" id="actu">
        <div className="w3-center w3-padding-64">
          <h1>
            <strong>
              Actu
              <span className="multicolor-text" style={{}}>
                alité
              </span>
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

      <section className="histo" id="histo">
        <h1 className="heading">
          <span>Histo</span>rique
        </h1>
        <div className="row">
          <div className="imageHisto">
            <img src={image4} alt="" />
            <h3>Meilleur historique</h3>
          </div>
          <div className="content">
            <h3>Notre histoire</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              consequuntur repellendus ab aspernatur explicabo tempora
              veritatis, hic officiis a non, assumenda laborum labore laudantium
              doloribus autem. Repudiandae minus exercitationem voluptate?
            </p>
          </div>
        </div>
      </section>
      <MainFooter />
    </div>
  );
};
