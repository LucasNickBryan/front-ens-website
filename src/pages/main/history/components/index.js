import React, { useEffect, useState } from "react";

import image from "../../../../assets/images/images.png";
import "./style.scss";
import MainFooter from "../../layout/footer";
import HistoryServices from "../../../../services/History.services";

const History = () => {
  // const [histories, setHistories] = useState([]);

  // useEffect(() => {
  //   HistoryServices.get().then((res) => {
  //     setHistories(res.data.data);
  //     // console.log("HISTORIES ", res.data.data);
  //   });
  // }, []);
  return (
    <div className="HISTORY_STYLES">
      <section id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 col-lg-4">
              <img src={image} alt="" className="w-100 img-thumbnail mb-3" />
            </div>

            <div className="col-md-7 col-lg-8">
              <h6 className="section-subtitle mb-0">AENF</h6>
              <h6 className="section-title mb-3">Historique</h6>
              <p>Association des Etudiants Normaliens Fianarantsoa (AENF).</p>
              <p>_______________________________________________ </p>
              <p>
                Araka ny fanadihadiana izay natao tamin'Andriamatoa Dr
                RATOVONJANAHARY Roger, Talen'ny ENS ny taona 2001-2007 dia
                nanamarina izy fa efa AENF no fiantso ny fikambanan'ny mpianatra
                teto amin'ny ENS.
              </p>
              <div>
                {/* <p>
                Nohamafisin'Andriamatoa RANDRIANARIVELO Chef Service de la
                Scolarité ENS ihany koa izany araka ny antso nifanaovan'izy sy
                Dr Roger tamin'ny Talata 02 Jolay 2019 tokony tamin'ny ray ora
                tolakandro.
              </p>
              <p>
                Tao arian'izay dia nambarany ihany koa fa tsy vohamarina ny
                fisian'ny sata hatramin'izay, satria raha ny tokony ho izy na
                misy izany dia tokony mipetraka mandrakariva eto amin'ny sekoly
                indrindra fa ny boky volamena.
              </p>
              <p>
                Nasiany teny kosa anefa ny momba ny hira faneva sy ny namorona
                azy; araka ny tantara dia Andriamatoa TSIAVALIKY Célestin,
                fondateur ENS teo aloha no nampanao fifaninanana famoronana hira
                faneva ka nahazo laharana voalohany tamin'izany ny hira
                fanevan'ny ENS (ENS sekoly ambony fianaranay...). Izay mbola
                ampiasaintsika kahatram'izao taona 2019 izao.
              </p>
              <p>
                Raha zohina ny tantatra dia feno 40 tona amin'ny taona 2020 ny
                ENS. Nohon'ny fahafantaran ireo rehetra ireo dia niezakanamorona
                ny sata mefehy ny fikambanana sy ny fitsipika anatiny ary
                fitsipika natao hifampifehezana ato amin'ny faritry ny ENS
                Fianarantsoa i Andriamatoa RAZAFIMAHATRATRA Jean de Dieu Gérard,
                Filohan'ny AENF tamin'ny taona 2017 - 2018, mpianatra mandalina
                manokana ny taranja matematika tato amin'ny sekoly.
              </p>
              <p>
                Napetraka izany mba hitondra filaminana ho an'ny fikambanana ka
                napidiriny tamin'ny fandaharan'asany ary mipetraka eo anivon'ny
                AENF sy ENS Fianarantsoa izany lalàna izany.
              </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <MainFooter />
    </div>
  );
};

export default History;
