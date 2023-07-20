import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IMAGE_PATH } from "../../../../config/modules";
import MainNavbar from "../../layout/header";
import MainFooter from "../../layout/footer";
import image2 from "../../../../assets/images/vadil.jpg";
import image3 from "../../../../assets/images/darya.jpg";
import image5 from "../../../../assets/images/andrea.jpg";

import "./styles.scss";
import "w3-css/w3.css";
import ActualityServices from "../../../../services/Actuality.services";

const Actuality = () => {
  const [actualities, setActualities] = useState([]);

  useEffect(() => {
    ActualityServices.get()
      .then((res) => {
        setActualities(res.data.data);
        console.log("Actualités ", res.data.data);
      })
      .catch((er) => {
        console.log(er);
      });
  }, []);
  return (
    <div className="ACTU_STYLES">
      {/* Fatcs Section */}
      <section id="team">
        <div className="container">
          <h4 className="section-title mb-5 text-center">
            <strong>
              <span style={{ color: "green" }}>Actu</span>alité
            </strong>
          </h4>

          <div className="row">
            {actualities.map((item) => (
              <div className="col-sm-6 col-md-4" key={item.id}>
                <div className="card text-center mb-4">
                  <img
                    alt=""
                    className="card-img-top inset"
                    src={
                      item.Picture.image
                        ? IMAGE_PATH + "/pictures/images/" + item.Picture.image
                        : image2
                    }
                    style={{ height: "300px" }}
                  />
                  <div className="card-body">
                    <h6 className="font-weight-bold display-8">
                      {item.Content.title}
                    </h6>
                    <p className="date"> {item.Content.date}</p>
                    <NavLink>
                      {item.Content.link}
                      <span className="link"></span>
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MainFooter />
    </div>
  );
};

export default Actuality;
