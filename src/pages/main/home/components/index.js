import React from "react";
import "./styles.scss";
import Actuality from "../../actuality/components";

export const HomePage = () => {
  return (
    <div className="HOME_STYLES">
      <div className="">
        <header className="header">
          <div className="overlay">
            <h2>Université de Fianarantsoa</h2>
            <h3 className="title"> ENS Fianarantsoa</h3>
            <h4 className="subtitle">
              Association des Etudiants Normaliens Fianarantsoa{" "}
            </h4>

            <div className="buttons text-center">
              <a href="#service" className="btn btn-primary rounded w-lg btn">
                Contactez nous
              </a>
            </div>
          </div>
        </header>
        <Actuality />
      </div>
    </div>
  );
};
