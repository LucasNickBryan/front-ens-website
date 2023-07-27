import React from "react";
import "./styles.scss";
import { SectionTitle } from "../ui/texts/texts";
import CarouselUI from "../ui/carousel";
import { SectionContentUI } from "../ui/section/SectionUI";
import { Card } from "../ui/cards";
import BackgroundUrl from '../../../assets/images/imgs/header.JPG'
import Header from "../layout/header";

export const HomePage = () => {
  return (
    <div className="HOME_STYLES">
      <div className="">
        <Header BackgroundUrl={BackgroundUrl}>
          <div className="overlay">
            <h2>Université de Fianarantsoa</h2>
            <h3 className="title"> ENS Fianarantsoa</h3>
            <h4 className="subtitle">
              Association des Etudiants Normaliens Fianarantsoa
            </h4>

            <div className="buttons text-center">
              <a href="#service" className="btn btn-primary rounded w-lg btn">
                Contactez nous
              </a>
            </div>
          </div>
        </Header>

        {/* CHECKED GALLERY */}
        <div className="!mt-32">
          <SectionTitle title="Nos moments forts" url={"/gallery"} />
          <div className="!mb-20">
            <CarouselUI />
          </div>
        </div>

        <section className="!px-16">
          <SectionTitle title="Actualités" mt={"50px"} url={"/actuality"} />
          <SectionContentUI />
        </section>

        <section className="!px-16">
          <SectionTitle title="Historique" mt={"0px"} url={"/history"} />
          <SectionContentUI isActuality={false} />
        </section>

        <section className="!px-16">
          <SectionTitle title="Personnel" mt={"0px"} url={"/staff"} />
          <div className="flex justify-center">
            <Card />
          </div>
        </section>
      </div>
    </div>
  );
};
