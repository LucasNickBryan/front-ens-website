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
      {/* Fatcs Section */}
      <section className="has-bg-img bg-img-2">
        <div className="container text-center">
          <h6 className="section-subtitle">We Are Awesome</h6>
          <h6 className="section-title mb-6">Some Fun Fucts</h6>
          <div className="widget-2">
            <div className="widget-item">
              <i className="ti-cup"></i>
              <h6 className="title">100+</h6>
              <div className="subtitle">Awards Won</div>
            </div>
            <div className="widget-item">
              <i className="ti-face-smile"></i>
              <h6 className="title">100+</h6>
              <div className="subtitle">Happy Clients</div>
            </div>
            <div className="widget-item">
              <i className="ti-blackboard"></i>
              <h6 className="title">845+</h6>
              <div className="subtitle">Project Completed</div>
            </div>
            <div className="widget-item">
              <i className="ti-comments-smiley"></i>
              <h6 className="title">15K+</h6>
              <div className="subtitle">Comments</div>
            </div>
          </div>
        </div>
      </section>

      <MainFooter />
    </div>
  );
};

export default Actuality;
