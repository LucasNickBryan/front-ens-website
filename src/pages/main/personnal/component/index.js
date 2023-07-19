import React, { useEffect, useState } from "react";
// import MainNavbar from "../../layout/header";
import MainFooter from "../../layout/footer";
// import image2 from "../../../../assets/images/Jonas.png";
// import image3 from "../../../../assets/images/hicks.jpg";
// import image5 from "../../../../assets/images/andrea.jpg";

import "./styles.scss";
import "w3-css/w3.css";
import PersonnalServices from "../../../../services/Personnal.services";

const Personnal = () => {
  // const [personnals, setPersonnals] = useState([]);

  // useEffect(() => {
  //   PersonnalServices.get()
  //     .then((res) => {
  //       setPersonnals(res.data.data);
  //       console.log("Personnal ", res.data.data);
  //     })
  //     .catch((er) => {
  //       console.log(er);
  //     });
  // }, []);
  return (
    <div className="PERSO_STYLES">
      {/* About Section with bg */}
      <section className="has-bg-img py-md">
        <div className="back-ny">
          <div className="container text-center">
            <h6 className="section-subtitle">
              Assciation des Etudiants Normaliens Fianarantsoa
            </h6>
            <h6 className="section-title mb-6">La voie hiérarchique</h6>
            <div className="widget mb-4">
              <div className="widget-item">
                <i className="ti-notepad"></i>
                <h4>Admin</h4>
              </div>
              <div className="widget-item">
                <i className="ti-layout"></i>
                <h4>Pdt AENF</h4>
              </div>
              <div className="widget-item">
                <i className="ti-filter"></i>
                <h4>Délégués</h4>
              </div>
              <div className="widget-item">
                <i className="ti-thumb-up"></i>
                <h4>Etudiants</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Of About Sectoin */}
      {/* Team Section */}
      <section id="team">
        <div className="container">
          <h6 className="section-subtitle text-center">Meet With</h6>
          <h6 className="section-title mb-5 text-center">Our Angels</h6>
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="card text-center mb-4">
                <img
                  alt=""
                  className="card-img-top inset"
                  src="assets/imgs/avatar.jpg"
                />
                <div className="card-body">
                  <h6 className="small text-primary font-weight-bold">
                    FOUNDER
                  </h6>
                  <h5 className="card-title">Matthew Davis</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magni quos esse tenetur illo qui, nostrum.
                  </p>
                  <div className="socials">
                    <a href="javascript:void(0)">
                      <i className="ti-facebook"></i>{" "}
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-github"></i>
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-dropbox"></i>
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="card text-center mb-4">
                <img
                  className="card-img-top inset"
                  src="assets/imgs/avatar-1.jpg"
                />
                <div className="card-body">
                  <h6 className="small text-primary font-weight-bold">CEO</h6>
                  <h5 className="card-title">Barbara Ross</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magni quos esse tenetur illo qui, nostrum.
                  </p>
                  <div className="socials">
                    <a href="javascript:void(0)">
                      <i className="ti-facebook"></i>{" "}
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-github"></i>
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-dropbox"></i>
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="card text-center mb-4">
                <img
                  className="card-img-top inset"
                  src="assets/imgs/avatar-2.jpg"
                />
                <div className="card-body">
                  <h6 className="small text-primary font-weight-bold">
                    Designer
                  </h6>
                  <h5 className="card-title">Karen Perry</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magni quos esse tenetur illo qui, nostrum.
                  </p>
                  <div className="socials">
                    <a href="javascript:void(0)">
                      <i className="ti-facebook"></i>{" "}
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-github"></i>
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-dropbox"></i>
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="card text-center mb-4">
                <img
                  className="card-img-top inset"
                  src="assets/imgs/avatar-3.jpg"
                />
                <div className="card-body">
                  <h6 className="small text-primary font-weight-bold">
                    App Designer
                  </h6>
                  <h5 className="card-title">Ashley Diaz</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magni quos esse tenetur illo qui, nostrum.
                  </p>
                  <div className="socials">
                    <a href="javascript:void(0)">
                      <i className="ti-facebook"></i>{" "}
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-github"></i>
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-dropbox"></i>
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="card text-center mb-4">
                <img
                  className="card-img-top inset"
                  src="assets/imgs/avatar-4.jpg"
                />
                <div className="card-body">
                  <h6 className="small text-primary font-weight-bold">
                    Developer
                  </h6>
                  <h5 className="card-title">Edward Harris</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magni quos esse tenetur illo qui, nostrum.
                  </p>
                  <div className="socials">
                    <a href="javascript:void(0)">
                      <i className="ti-facebook"></i>{" "}
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-github"></i>
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-dropbox"></i>
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="card text-center mb-4">
                <img
                  className="card-img-top inset"
                  src="assets/imgs/avatar-5.jpg"
                />
                <div className="card-body">
                  <h6 className="small text-primary font-weight-bold">
                    photographer
                  </h6>
                  <h5 className="card-title">Brian Scott</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magni quos esse tenetur illo qui, nostrum.
                  </p>
                  <div className="socials">
                    <a href="javascript:void(0)">
                      <i className="ti-facebook"></i>{" "}
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-github"></i>
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-dropbox"></i>
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Team Sectoin */}
      <MainFooter />
    </div>
  );
};

export default Personnal;
