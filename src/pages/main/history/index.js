import React, { useEffect, useState } from "react";
import "./style.scss";
import Header from "../layout/header";
import BackgroundUrl from '../../../assets/images/imgs/header.JPG'
import { SectionContentUI } from "../ui/section/SectionUI";
import ContentServices from "../../../services/Content.services";

const History = () => {
  const [histories, setHistories] = useState([
    {
      Picture: {},
      Content: {
        title: "RÉCEPTION NOVICES l1",
        description: "<p> lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsumlorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsumlorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsumlorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsumlorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsumlorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum</p>",
        link: null,
        date: "2023"
      }
    }
  ]);

  useEffect(() => {
    ContentServices.getHistory()
      .then(res => {
        setHistories(res.data.data)
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
    <div className="HISTORY_STYLES">
      <Header BackgroundUrl={BackgroundUrl}>
        <div className="overlay">
          <div className="border p-3 title">
            <h1>Événements et Historiques</h1>
          </div>
        </div>
      </Header>

      <section className="w-10/12 mx-auto">
        {
          histories.length > 0 &&
          histories.map((hist, index)=>(
            <SectionContentUI key={index} isActuality={false} content={hist.Content} picture={hist.Picture} />
          ))
        }
      </section>
    </div>
  );
};

export default History;
