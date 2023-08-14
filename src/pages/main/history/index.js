import React, { useEffect, useState } from "react";
import "./style.scss";
import Header from "../layout/header";
import BackgroundUrl from '../../../assets/images/imgs/header.JPG'
import { SectionContentUI } from "../ui/section/SectionUI";
import ContentServices from "../../../services/Content.services";

const History = () => {
  const [histories, setHistories] = useState([]);

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
      <Header/>

      <section className="w-10/12 mx-auto hh_fr">
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
