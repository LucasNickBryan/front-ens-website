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
      <div
        className="w3-row w3-padding container"
        id="menu"
        style={{ backgroundColor: "#e6eeff" }}
      >
        <div className="w3-col l6 w3-padding-large">
          <img
            src={image}
            className="w3-round w3-image w3-opacity-min"
            alt="Menu"
            style={{ width: "100%", paddingTop: "6%" }}
          />
        </div>
        <div
          className="w3-left w3-col m6 w3-padding-large"
          style={{ backgroundColor: "" }}
        >
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
      <div
        className="container"
        style={{ paddingTop: "3%", textAlign: "center" }}
      >
        <h1>
          <strong>
            Ecole Norm
            <span className="multicolor-text" style={{ color: "green" }}>
              ale Supérieure
            </span>
          </strong>
        </h1>
      </div>

      <div className="w3-row container">
        <div className="w3-col l8 s12">
          <div className="w3-card-4 w3-margin w3-margin-top">
            <img src={image2} alt="Nature" style={{ width: "100%" }} />
            <div className="w3-container">
              <h3>
                <b>TITLE HEADING</b>
              </h3>
              <h5>
                Title description,{" "}
                <span className="w3-opacity">April 7, 2014</span>
              </h5>
            </div>

            <div className="w3-container">
              <p>
                Mauris neque quam, fermentum ut nisl vitae, convallis maximus
                nisl. Sed mattis nunc id lorem euismod placerat. Vivamus
                porttitor magna enim, ac accumsan tortor cursus at. Phasellus
                sed ultricies mi non congue ullam corper. Praesent tincidunt sed
                tellus ut rutrum. Sed vitae justo condimentum, porta lectus
                vitae, ultricies congue gravida diam non fringilla.
              </p>
            </div>
          </div>
        </div>
        <hr />

        <div className="w3-col l4">
          <div className="w3-card w3-margin w3-margin-top">
            <img src={image5} alt="" style={{ width: "100%" }} />
            <div className="w3-container w3-white">
              <h4>
                <b>My Name</b>
              </h4>
              <p>
                Just me, myself and I, exploring the universe of uknownment. I
                have a heart of love and a interest of lorem ipsum and mauris
                neque quam blog. I want to share my world with you.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w3-row-padding container" id="about">
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
            <img src={image4} alt="Jane" style={{ width: "100%" }} />
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

      <div
        className="container"
        style={{ paddingTop: "2%", paddingBottom: "2%", textAlign: "center" }}
      >
        <h2>
          <strong>
            <span style={{ color: "green" }}>Histo</span>
            rique
          </strong>
        </h2>
      </div>

      <div className="container" style={{ height: "", paddingTop: "1%" }}>
        <div className="row" style={{ paddingTop: "" }}>
          <div className="col-sm-6" style={{ paddingTop: "" }}>
            <img src={images} alt="" width="40%" height="170px" />
          </div>
          <div className="col-sm-6">
            <div className="">
              <div style={{}} className="">
                <p style={{ fontSize: "20px" }}>
                  <span>
                    <strong
                      style={{
                        fontFamily: "'Roboto Slab', serif",
                        fontSize: "30px",
                      }}
                    >
                      Emmanuel MACRON
                    </strong>{" "}
                  </span>{" "}
                  <br /> Le huitième Président de la Vème République française.{" "}
                  <br />
                  Fondateur du mouvement « En Marche ! », créé le 6 avril 2016,
                  il l’a dirigé jusqu’à sa première victoire à l’élection
                  présidentielle, le 7 mai 2017. Le 24 avril 2022, Emmanuel
                  Macron est réélu Président de la République. <br />
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
