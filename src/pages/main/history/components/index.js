import React from "react";
import MainNavbar from "../../layout/header";

import image4 from "../../../../assets/images/vasily.jpg";
import "./style.scss";
import MainFooter from "../../layout/footer";

const History = () => {
  return (
    <div>
      <MainNavbar />
      <div className="HISTORY_STYLES">
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
                veritatis, hic officiis a non, assumenda laborum labore
                laudantium doloribus autem. Repudiandae minus exercitationem
                voluptate?
              </p>
            </div>
          </div>
        </section>
      </div>
      <MainFooter />
    </div>
  );
};

export default History;
