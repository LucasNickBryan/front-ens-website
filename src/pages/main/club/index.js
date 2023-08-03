import React, { useEffect } from "react";
import Header from "../layout/header";
import BackgroundUrl from "../../../assets/images/imgs/header.JPG";
import "./styles.scss";

const Club = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [])
  
  return (
    <div className="CLUB_STYLES">
      <Header BackgroundUrl={BackgroundUrl}>
        <div className="overlay">
          <div className="border p-3 title">
            <h1>Nos clubs</h1>
          </div>
        </div>
      </Header>

      <section id="service">
        <div className="container">
          <h6 className="section-subtitle text-center">
            Les clubs au sein de l'association{" "}
          </h6>
          <h5 className="section-title text-center mb-6">
            La majorité de ces Club sont instaurés par le Mandat de Président
            Adrien en 2021.{" "}
          </h5>

          <div className="row">
            <div className="col-sm-4 col-md-3 club_cc">
              <div className="card mb-4 club_ca">
                <div className="card-body">
                  <div className="club_ao">
                    <i class="fas fa-music ico fa-2x"></i>
                  </div>
                  <div className="club_aa">
                    <h2 className="mb-4">
                        <i className="ti-filter text-primary"></i>
                      </h2>
                      <h6 className="card-title">NOMIA</h6>
                      <p>NOrmaliens MItory An-kira</p>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 club_cc">
              <div className="card mb-4 club_ca">
                <div className="card-body">
                <div className="club_ao">
                <i class="fas fa-desktop ico fa-2x"></i>
                </div>
                <div className="club_aa">
                  <h2 className="mb-4">
                    <i className="ti-paint-roller text-primary"></i>
                  </h2>
                  <h6 className="card-title">INFORMATIQUES</h6>
                  <p>Présidé par Mr Marco L3 MATH</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 club_cc">
              <div className="card mb-4 club_ca">
                <div className="card-body">
                <div className="club_ao">
                <i class="fas fa-user ico fa-2x"></i>
                </div>
                <div className="club_aa">
                  <h2 className="mb-4">
                    <i className="ti-ruler-pencil text-primary"></i>
                  </h2>
                  <h6 className="card-title">KABARY</h6>
                  <p>Présidé par Mr Arnolain L2 MATH</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 club_cc">
              <div className="card mb-4 club_ca">
                <div className="card-body">
                <div className="club_ao">
                <i class="fas fa-child ico fa-2x"></i>
                </div>
                <div className="club_aa">
                  <h2 className="mb-4">
                    <i className="ti-layers text-primary"></i>
                  </h2>
                  <h6 className="card-title">DANCE</h6>
                  <p>Présidé par Mr Tokn L3 ST</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 club_cc">
              <div className="card mb-4 club_ca">
                <div className="card-body">
                <div className="club_ao">
                <i class="fas fa-chalkboard-teacher ico fa-2x"></i>
                </div>
                <div className="club_aa">
                  <h2 className="mb-4">
                    <i className="ti-bolt text-primary"></i>
                  </h2>
                  <h6 className="card-title">FORMATION</h6>
                  <p>Présidé par Mr Thomas M1 PC</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 club_cc">
              <div className="card mb-4 club_ca">
                <div className="card-body">
                <div className="club_ao">
                <i class="fas fa-camera ico fa-2x"></i>
                </div>
                <div className="club_aa">
                  <h2 className="mb-4">
                    <i className="ti-palette text-primary"></i>
                  </h2>
                  <h6 className="card-title">Multimédia</h6>
                  <p>Présidé par le Président de l'ANF Mr Anicet</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 club_cc">
              <div className="card mb-4 club_ca">
                <div className="card-body">
                <div className="club_ao">
                <i class="fas fa-square-root-alt ico fa-2x"></i>
                </div>
                <div className="club_aa">
                  <h2 className="mb-4">
                    <i className="ti-stats-up text-primary"></i>
                  </h2>
                  <h6 className="card-title">iMatematiko</h6>
                  <p>Présidé par Mlle Valisoa</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 club_cc">
              <div className="card mb-4 club_ca">
                <div className="card-body">
                <div className="club_ao">
                <i class="fas fa-theater-masks ico fa-2x"></i>
                </div>
                <div className="club_aa">
                  <h2 className="mb-4">
                    <i className="ti-location-arrow text-primary"></i>
                  </h2>
                  <h6 className="card-title">THEATRALE</h6>
                  <p>Présidé Par Jeancia L2 SE P</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Club;
