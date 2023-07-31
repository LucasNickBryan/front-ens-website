import React, { useEffect, useState } from "react";
import "./styles.scss";
import ActualityServices from "../../../services/Actuality.services";
import CarouselUI from "../ui/carousel";
import { SectionTitle } from "../ui/texts/texts";
import { Card } from "../ui/cards";
import { SectionContentUI } from "../ui/section/SectionUI";
import Header from "../layout/header";
import BackgroundUrl from '../../../assets/images/imgs/header.JPG'

const Actuality = () => {
  const [actualities, setActualities] = useState([]);

  useEffect(() => {
    ActualityServices.get()
      .then((res) => {
        setActualities(res.data.data);
        console.log("Actualités ", res.data.data);
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
        <SectionContentUI />
        <SectionContentUI />
        <SectionContentUI />
      </section>
    </div>
  );
};

export default Actuality;
