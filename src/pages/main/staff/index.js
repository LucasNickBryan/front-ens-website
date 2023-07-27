import React, { useEffect, useState } from "react";
import "./styles.scss";
import Header from "../layout/header";
import BackgroundUrl from '../../../assets/images/imgs/header.JPG'

export default function Staff(){
  
  return (
    <div className="PERSO_STYLES">
      <Header BackgroundUrl={BackgroundUrl}>
        <div className="overlay">
          <div className="border p-3 title">
            <h1>Personnels</h1>
          </div>
        </div>
      </Header>

      {/* About Section with bg */}
      {/* <section className="has-bg-img py-md">
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
      </section> */}
      {/* End Of About Sectoin */}
      {/* Team Section */}
      <section>
        HELLO WORLD
      </section>
      {/* End of Team Sectoin */}
    </div>
  );
};
