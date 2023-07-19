import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";
import "w3-css/w3.css";

export default function MainFooter() {
  return (
    <div className="FOOTER_STYLES">
      <section className="has-bg-img py-0">
        <div
          className="container"
          style={{ color: "black", fontWeight: "bolder" }}
        >
          <div
            className="footer"
            style={{ color: "black", fontWeight: "bolder" }}
          >
            <div className="footer-lists">
              <ul className="list">
                <li className="list-head">
                  <h6 className="font-weight-bold">ABOUT US</h6>
                </li>
                <li className="list-body">
                  <NavLink className="logo">
                    <img src="assets/imgs/logo.png" alt="" />
                    <h6>Creative Studio</h6>
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
                      className="d-inline text-primary"
                      href="http://www.devcrud.com"
                    >
                      DevCRUD
                    </a>
                  </p>
                </li>
              </ul>
              <ul className="list">
                <li className="list-head">
                  <h6 className="font-weight-bold">USEFUL LINKS</h6>
                </li>
                <li className="list-body">
                  <div className="row">
                    <div className="col">
                      <a href="#about">About</a>
                      <a href="#service">Service</a>
                      <a href="#portfolio">Portfolio</a>
                      <a href="#testmonail">Testimonial</a>
                    </div>
                    <div className="col">
                      <a href="#team">Team</a>
                      <a href="#blog">Blog</a>
                      <a href="#dsd">Faq</a>
                      <a href="#">Privacy Policy</a>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="list">
                <li className="list-head">
                  <h6 className="font-weight-bold">CONTACT INFO</h6>
                </li>
                <li className="list-body">
                  <p>Contact us and we'll get back to you within 24 hours.</p>
                  <p>
                    <i className="ti-location-pin"></i> 12345 Fake ST NoWhere AB
                    Country
                  </p>
                  <p>
                    <i className="ti-email"></i> info@website.com
                  </p>
                  <div className="social-links">
                    <a href="javascript:void(0)" className="link">
                      <i className="ti-facebook"></i>
                    </a>
                    <a href="javascript:void(0)" className="link">
                      <i className="ti-twitter-alt"></i>
                    </a>
                    <a href="javascript:void(0)" className="link">
                      <i className="ti-google"></i>
                    </a>
                    <a href="javascript:void(0)" className="link">
                      <i className="ti-pinterest-alt"></i>
                    </a>
                    <a href="javascript:void(0)" className="link">
                      <i className="ti-instagram"></i>
                    </a>
                    <a href="javascript:void(0)" className="link">
                      <i className="ti-rss"></i>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// export default Index;
