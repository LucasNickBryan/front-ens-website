import React, { useEffect, useState } from "react";
import "./styles.scss";
import { SectionContentUI } from "../ui/section/SectionUI";
import Header from "../layout/header";
import BackgroundUrl from '../../../assets/images/imgs/header.JPG'
import ContentServices from "../../../services/Content.services";

const Actuality = () => {
  const [actualities, setActualities] = useState([]);

  useEffect(() => {
    ContentServices.getActuality()
      .then(res => {
        setActualities(res.data.data)
      })
      .catch((er) => {
        console.log(er);
      });

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="ACTU_STYLES !pb-8">
      <Header BackgroundUrl={BackgroundUrl}>
        <div className="overlay">
          <div className="border p-3 title">
            <h1>Actualités</h1>
          </div>
        </div>
      </Header>
      <section className="!px-16">
        {
          actualities.length > 0 &&
          actualities.map((actu, index)=>(
            <SectionContentUI key={index} content={actu.Content} picture={actu.Picture} />
          ))
        }
      </section>
    </div>
  );
};

export default Actuality;
