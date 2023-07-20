import React, { useEffect, useState } from "react";

import image from "../../../../assets/images/images.png";
import "./style.scss";
import MainFooter from "../../layout/footer";
import HistoryServices from "../../../../services/History.services";
import { IMAGE_PATH } from "../../../../config/modules";
import MainNavbar from "../../layout/header";

const History = () => {
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    HistoryServices.get()
      .then((res) => {
        setHistories(res.data.data);
        console.log("HISTORIES ", res.data.data);
      })
      .catch((er) => {
        console.log(er);
      });
  }, []);
  return (
    <div className="HISTORY_STYLES">
      <MainNavbar />
      <div className="banner">
        <div className="linear">
          <div className="banner-text">
            <h1>Assiciation des Étudiant Normaliens de Fianarantsoa</h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
          </div>
        </div>
      </div>
      <section id="about">
        <div className="container">
          {histories.map((item) => (
            <div className="row align-items-center" key={item.id}>
              <div className="col-md-5 col-lg-4">
                <img
                  src={
                    item.Picture.image
                      ? IMAGE_PATH + "/pictures/images/" + item.Picture.image
                      : image
                  }
                  alt=""
                  className="w-100 img-thumbnail mb-3"
                />
              </div>

              <div className="col-md-7 col-lg-8">
                <h3 className="title">
                  <span>{item.Content.title}</span>
                </h3>
                <hr style={{ fontSize: "20px" }} />
                <div
                  style={{ textAlign: "justify" }}
                  dangerouslySetInnerHTML={{ __html: item.Content.description }}
                />
                <p className="link"> {item.Content.link}</p>
                <p className="date"> {item.Content.date}</p>
                <div></div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <MainFooter />
    </div>
  );
};

export default History;
