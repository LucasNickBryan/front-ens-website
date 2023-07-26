import React, { useEffect, useState } from "react";
// import MainNavbar from "../../layout/header";
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
          {/* <div className='space_work_fc'>


          <button className='btn_fc' onClick={(e) => openM(e)}> + Ajouter une fonction</button>
            <div className='hierarchie'>
              {
                bigy()
              }
            </div>
           
        
        </div> */}
      </section>
      {/* End of Team Sectoin */}
    </div>
  );
};

export default Personnal;
