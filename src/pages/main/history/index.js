import React, { useEffect, useState } from "react";

import image from "../../../assets/images/darya.jpg";
import "./style.scss";
import HistoryServices from "../../../services/History.services";
import { IMAGE_PATH } from "../../../config/modules";
import Header from "../layout/header";
import BackgroundUrl from '../../../assets/images/imgs/header.JPG'
import { SectionContentUI } from "../ui/section/SectionUI";

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
    HistoryServices.get()
      .then((res) => {
        setHistories(res.data.data);
        console.log("HISTORIES ", res.data.data);
      })
      .catch((er) => {
        console.log(er);
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
        <SectionContentUI isActuality={false} />
        <SectionContentUI isActuality={false} />
      </section>
    </div>
  );
};

export default History;
