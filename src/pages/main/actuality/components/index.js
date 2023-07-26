import React, { useEffect, useState } from "react";
import "./styles.scss";
import ActualityServices from "../../../../services/Actuality.services";
import CarouselUI from "../../ui/carousel";
import DefaultImage from '../../../../assets/images/pexells.jpg'

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
    <div className="ACTU_STYLES">
      {/* CHECKED GALLERY */}
      <div className=" relative">
        <div className="max-w-4xl flex mx-auto !my-20">
          <CarouselUI />
        </div>
        <div className="bg-greencolor h-2/3 w-3/5 left-[20%] absolute top-[17%] sm:!hidden"></div>

      </div>

      {/* ACTIVITY CONTENT */}
      <section className="!px-16">
        <div className="grid grid-cols-2 md:grid-cols-1 !mb-32">
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

    </div>
  );
};

export default Actuality;
