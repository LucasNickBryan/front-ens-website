import React, { useEffect } from "react";
import Header from "../layout/header";
import BackgroundUrl from '../../../assets/images/imgs/header.JPG'

const Contact = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [])

  return (
    <div className="CONTACT_STYLES">
      <Header BackgroundUrl={BackgroundUrl}>
        <div className="overlay">
          <div className="border p-3 title">
            <h1>Contactez-nous</h1>
          </div>
        </div>
      </Header>

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
