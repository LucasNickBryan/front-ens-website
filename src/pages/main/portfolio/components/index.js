import React from "react";
import MainFooter from "../../layout/footer";

const Portfolio = () => {
  return (
    <div className="PORTFOLIO_STYLES">
      {/* Portfolio section */}
      <section id="portfolio">
        <div className="container text-center">
          <h6 className="section-subtitle">Our Awesome Works</h6>
          <h6 className="section-title mb-5">Our Portfolio</h6>
          <div className="row">
            <div className="col-sm-4">
              <div className="img-wrapper">
                <img src="assets/imgs/folio-1.jpg" />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Project Title</h5>
                    <a href="javascript:void(0)">
                      <i className="ti-zoom-in"></i>
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-link"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="img-wrapper">
                <img src="assets/imgs/folio-2.jpg" />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Project Title</h5>
                    <a href="javascript:void(0)">
                      <i className="ti-zoom-in"></i>
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="img-wrapper">
                <img src="assets/imgs/folio-3.jpg" />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Project Title</h5>
                    <a href="javascript:void(0)">
                      <i className="ti-zoom-in"></i>
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-link"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="img-wrapper">
                <img src="assets/imgs/folio-4.jpg" />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Project Title</h5>
                    <a href="javascript:void(0)">
                      <i className="ti-zoom-in"></i>
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="img-wrapper">
                <img src="assets/imgs/folio-5.jpg" />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Project Title</h5>
                    <a href="javascript:void(0)">
                      <i className="ti-zoom-in"></i>
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-link"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="img-wrapper">
                <img src="assets/imgs/folio-6.jpg" />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Project Title</h5>
                    <a href="javascript:void(0)">
                      <i className="ti-zoom-in"></i>
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of portfolio section */}
      <MainFooter />
    </div>
  );
};

export default Portfolio;
