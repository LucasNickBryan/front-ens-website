import React, { useEffect, useState } from "react";
import "./styles.scss";
import { SectionTitle } from "../ui/texts/texts";
import CarouselUI from "../ui/carousel";
import { SectionContentUI } from "../ui/section/SectionUI";
import { Card } from "../ui/cards";
import BackgroundUrl from '../../../assets/images/imgs/header.JPG'
import Header from "../layout/header";
import Animation from "../../ui/Animation";
import GalleryServices from "../../../services/Gallery.services";
import { IMAGE_PATH } from "../../../config/modules";
import ContentServices from "../../../services/Content.services";
import PersonnelServices from "../../../services/Personnel.services";
import DefaultUserImage from '../../../assets/icons/user.png'

export const HomePage = () => {
  const [gallery, setGallery] = useState([])
  const [histories, setHistories] = useState([])
  const [actualities, setActualities] = useState([])
  const [personnels, setPersonnels] = useState([])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    // load principals images
    GalleryServices.getPrincipal()
      .then((res => {
        const formated_galleries = []
        res.data.data.forEach(img => {
          formated_galleries.push({ image: IMAGE_PATH + "/pictures/images/" + img.image })
        })
        .catch(err => { console.log("ERROR ", err); })

        setGallery(formated_galleries)
      }))

    // load histories
    ContentServices.getHistory()
      .then(res => {
        setHistories(res.data.data)
      })
      .catch(err => { console.log("ERROR ", err); })

    // load actualities
    ContentServices.getActuality()
      .then(res => {
        setActualities(res.data.data)
      })
      .catch(err => { console.log("ERROR ", err); })

    // load personnels
    PersonnelServices.get()
      .then(res => {
        let staff_list = []
        for (let i = 0; i < (res.data).length; i++) {
          if (i < 3) {
            const staff = {
              image: res.data[i].avatar ? IMAGE_PATH + "/staffs/images/" + res.data[i].avatar : DefaultUserImage,
              name: res.data[i].name,
              occupation: res.data[i].Occupation.name,
            }
            staff_list.push(staff)
          }

        }
        setPersonnels(staff_list)

      })
      .catch(err => { console.log("ERROR ", err); })


  }, [])
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

            {/* <div className="buttons text-center">
              <a href="#service" className="btn btn-primary rounded w-lg btn">
                Contactez nous
              </a>
            </div> */}
          </div>
        </Header>

        {/* CHECKED GALLERY */}
        <div className="!mt-32">
          {
            gallery.length > 0 &&
            <>
              <Animation animate="fade-down" duration="4000">
                <SectionTitle title="Nos moments forts" url={"/gallery"} />
              </Animation>
              <Animation animate="fade-up" duration="3000" offset="200">
                <div className="!mb-20">
                  <CarouselUI images={gallery} />
                </div>
              </Animation>
            </>
          }
        </div>

        {
          actualities.length > 0 &&
          <section className="!px-16 hh_fr">
            {/* !px-16 */}
            <Animation animate="fade-down">
              <SectionTitle title="Actualités" mt={"50px"} url={"/actuality"} />
            </Animation>
            <SectionContentUI content={actualities[0].Content} picture={actualities[0].Picture} />
          </section>
        }

        {
          histories.length > 0 &&
          <section className="!px-16 hh_fr">
            <Animation animate="fade-down">
              <SectionTitle title="Historiques" mt={"0px"} url={"/history"} />
            </Animation>
            <SectionContentUI isActuality={false} content={histories[0].Content} picture={histories[0].Picture} />
          </section>
        }

        {
          personnels.length > 0 &&
          <section className="!px-16">
            <Animation animate="fade-down">
              <SectionTitle title="Personnels" mt={"0px"} url={"/staff"} />
            </Animation>
            <div className="flex md:flex-col lg:flex-row justify-center gap-5">
              {
                personnels.map((staff, index) => (
                  <Animation
                    key={index}
                    animate={index == 1 ? "flip-right" : "flip-left"}
                    duration={(index + 1) * 1000}>
                    <Card image={staff.image} name={staff.name} occupation={staff.occupation} />
                  </Animation>
                ))
              }
            </div>
          </section>
        }
      </div>
    </div>
  );
};
