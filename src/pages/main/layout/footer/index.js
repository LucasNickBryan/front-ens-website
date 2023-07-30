import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles.scss";
import FacebookIcon from '../../../../assets/icons/facebook.png'
import WebsiteIcon from '../../../../assets/icons/globe.png'
import Animation from "../../../ui/Animation";

export default function MainFooter() {
  return (
    <Animation animate="fade-up">
      <footer className="FOOTER_STYLES">
        <section className="py-0">
          <div
            className="!px-24"
          >
            <div
              className="footer"
              style={{ fontWeight: "bolder" }}
            >
              <div className="footer-lists">
                <ul className="list">
                  <li className="list-head">
                    <h6 className="font-weight-bold">A PROPOS</h6>
                  </li>
                  <li className="list-body">
                    <NavLink className="logo">
                      <img src="assets/imgs/logo.png" alt="" />
                      <h6>AEENS Fianarantsoa</h6>
                    </NavLink>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Beatae nobis fugit maxime deleniti minus optio accusamus,
                      quam maiores explicabo sunt.
                    </p>
                    <p className="mt-3">
                      Copyright{" "}
                      <script>document.write(new Date().getFullYear())</script>{" "}
                      &copy;{" "}
                      <a
                        className="d-inline !text-redcolor"
                        href="http://www.devcrud.com"
                      >
                        Tout droit réservé
                      </a>
                    </p>
                  </li>
                </ul>

                <ul className="list">
                  <li className="list-head">
                    <h6 className="font-weight-bold">LIENS UTILES</h6>
                  </li>
                  <li className="list-body">
                    <div className="flex flex-col gap-4">
                      <a href="#about">
                        <img src={FacebookIcon} alt="facebook" className="w-8 inline mr-2" />
                        nous rejoindre sur facebook
                      </a>
                      <Link to="/">
                        <img src={WebsiteIcon} alt="website" className="w-8 inline mr-2" />
                        visiter le site web
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </Animation>
  );
}
