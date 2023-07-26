import React from "react";
import { NavLink } from "react-router-dom";
import image from "../../../../assets/images/Jonas.png";
import image1 from "../../../../assets/images/andrea.jpg";
import image2 from "../../../../assets/images/hicks.jpg";

const Contact = () => {
  return (
    <div className="CONTACT_STYLES">
      <section id="blog">
        <div className="container">
          <h6 className="section-subtitle text-center">News Feeds</h6>
          <h6 className="section-title mb-6 text-center">Our Blog</h6>

          <div className="row">
            <div className="col-md-4">
              <div className="card blog-post my-4 my-sm-5 my-md-0">
                <img alt="" src={image} />
                <div className="card-body">
                  <div className="details mb-3">
                    <NavLink>
                      <i className="ti-comments"></i> 123
                    </NavLink>
                    <NavLink>
                      <i className="ti-eye"></i> 123
                    </NavLink>
                  </div>
                  <h5 className="card-title">Possimus aliquam veniam</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repudiandae laudantium dolor nisi obcaecati, non laboriosam
                    asperiores doloremque tempora repellendus iure!
                  </p>
                  <NavLink>Read More...</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card blog-post my-4 my-sm-5 my-md-0">
                <img src={image1} alt="" />
                <div className="card-body">
                  <div className="details mb-3">
                    <NavLink>
                      <i className="ti-comments"></i> 434
                    </NavLink>
                    <NavLink>
                      <i className="ti-eye"></i> 987
                    </NavLink>
                  </div>
                  <h5 className="card-title">Repudiandae laudantium</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repudiandae laudantium dolor nisi obcaecati, non laboriosam
                    asperiores doloremque tempora repellendus iure!
                  </p>
                  <NavLink>Read More...</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card blog-post my-4 my-sm-5 my-md-0">
                <img src={image2} alt="" />
                <div className="card-body">
                  <div className="details mb-3">
                    <NavLink>
                      <i className="ti-comments"></i> 164
                    </NavLink>
                    <NavLink>
                      <i className="ti-eye"></i> 425
                    </NavLink>
                  </div>
                  <h5 className="card-title">Laboriosam asperiores</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repudiandae laudantium dolor nisi obcaecati, non laboriosam
                    asperiores doloremque tempora repellendus iure!
                  </p>
                  <NavLink> Read More...</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <div className="contact-card">
            <div className="infos">
              <h6 className="section-subtitle">Nous voilà</h6>
              <h6 className="section-title mb-4">Contactez-nous</h6>

              <div className="item">
                <i className="ti-location-pin"></i>
                <div className="">
                  <h5>Adresse</h5>
                  <p> UF, ENS Fianarantsoa </p>
                </div>
              </div>
              <div className="item">
                <i className="ti-mobile"></i>
                <div>
                  <h5>Numéro Téléphone</h5>
                  <p>+261 34 22 777 45</p>
                </div>
              </div>
              <div className="item">
                <i className="ti-email"></i>
                <div className="mb-0">
                  <h5> Address E-mail</h5>
                  <p>aenf2023@gmail.com</p>
                </div>
              </div>
              <div className="item">
                <i className="ti-world"></i>
                <div className="mb-0">
                  <h5>Plus d'information</h5>
                  <p>info@aenf.org</p>
                </div>
              </div>
            </div>
            <div className="form">
              <h6 className="section-subtitle">Disponible 24h/24h</h6>
              <h6 className="section-title mb-4">Laissez votre message</h6>
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Adrsse e-mail"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    id="exampleInputPassword1"
                    placeholder="Mot de passe"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="contact-message"
                    id=""
                    cols="30"
                    rows="7"
                    className="form-control form-control-lg"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-lg mt-3"
                >
                  Envoie
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
    </div>
  );
};

export default Contact;
