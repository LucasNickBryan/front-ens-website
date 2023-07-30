import React from "react";
import "./styles.scss";
import { SectionTitle } from "../ui/texts/texts";
import CarouselUI from "../ui/carousel";
import { SectionContentUI } from "../ui/section/SectionUI";
import { Card } from "../ui/cards";
import BackgroundUrl from '../../../assets/images/imgs/header.JPG'
import Header from "../layout/header";
import Animation from "../../ui/Animation";

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
          <Animation animate="fade-down" duration="4000">
            <SectionTitle title="Nos moments forts" url={"/gallery"} />
          </Animation>
          <Animation animate="fade-up" duration="3000">
            <div className="!mb-20">
              <CarouselUI />
            </div>
          </Animation>
        </div>

        <section className="!px-16">
          <Animation animate="fade-down">
            <SectionTitle title="Actualités" mt={"50px"} url={"/actuality"} />
          </Animation>
          <SectionContentUI />
        </section>

        <section className="!px-16">
          <Animation animate="fade-down">
            <SectionTitle title="Historiques" mt={"0px"} url={"/history"} />
          </Animation>
          <SectionContentUI isActuality={false} />
        </section>

        <section className="!px-16">
          <Animation animate="fade-down">
            <SectionTitle title="Personnels" mt={"0px"} url={"/staff"} />
          </Animation>
          <div className="flex md:flex-col lg:flex-row justify-center gap-5">
            <Animation animate="flip-right" duration="1000">
              <Card />
            </Animation>
            <Animation animate="flip-left" duration="2000">
              <Card />
            </Animation>
            <Animation animate="flip-right" duration="3000">
              <Card />
            </Animation>
          </div>
        </section>
      </div>
    </div>
  );
};
