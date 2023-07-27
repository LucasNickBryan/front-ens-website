import React, { useEffect, useState } from "react";
import "./styles.scss";
import ActualityServices from "../../../../services/Actuality.services";
import CarouselUI from "../../ui/carousel";
import DefaultImage from '../../../../assets/images/pexells.jpg'
import { SectionTitle } from "../../ui/texts";
import { Card } from "../../ui/cards";

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
  }, []);

  return (
    <div className="ACTU_STYLES !pb-8">
      {/* CHECKED GALLERY */}
      <div>
        <SectionTitle title="Nos moments forts" />
        <div className="!mb-20">
          <CarouselUI />
        </div>
      </div>

      {/* ACTIVITY CONTENT */}
      <section className="!px-16">
        <SectionTitle title="Actualités" mt={"50px"} />
        <div className="grid grid-cols-2 md:grid-cols-1 !mb-32">
          <div className="opacity-90 hover:opacity-100">
            <img src={DefaultImage} alt="..." className="rounded object-cover h-full" />
          </div>

          <div className="relative pl-5 text-side shadow">
            <div className="text-center pr-5">
              <h2 className="border-b-2 border-redcolor uppercase text-redcolor">titre de l'actualité</h2>
            </div>
            <div className="my-4 !pb-11">
              lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum
              lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum
              lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum
              lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum
              lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum
              lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum
            </div>
            <div className="absolute bottom-0 left-0 flex justify-between sm:flex-col px-5 w-full">
              <a className="!text-greencolor" target="_blanck" href="">www.facebook.com/aeens</a>
              <span className="font-bold">jeudi 08 juin 2023</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-1">
          <div>
            <img src={DefaultImage} alt="..." className="rounded object-cover h-full" />
          </div>

          <div className="relative pl-5 text-side shadow">
            <div className="text-center pr-5">
              <h2 className="border-b-2 border-redcolor uppercase text-redcolor">titre de l'actualité</h2>
            </div>
            <div className="my-4 !pb-11">
              lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum
              lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum
              lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum
              lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum
              lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum
              lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum
            </div>
            <div className="absolute bottom-0 left-0 flex justify-between sm:flex-col px-5 w-full">
              <a className="!text-greencolor" target="_blanck" href="">www.facebook.com/aeens</a>
              <span className="font-bold">jeudi 08 juin 2023</span>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <Card />
      </div>
    </div>
  );
};

export default Actuality;
