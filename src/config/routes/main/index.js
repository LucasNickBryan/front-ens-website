import React from "react";
import { Route, Routes } from "react-router-dom";

import { HomePage } from "../../../pages/main/home/components";
import Main from "../../../pages/main";
import History from "../../../pages/main/history/components";
import Actuality from "../../../pages/main/actuality/components";
import Personnal from "../../../pages/main/personnal/component";
import Club from "../../../pages/main/club/components";
import Portfolio from "../../../pages/main/portfolio/components";
import Contact from "../../../pages/main/contact/components";
export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/history" element={<History />} />
        <Route path="/actuality" element={<Actuality />} />
        <Route path="/personnal" element={<Personnal />} />
        <Route path="/club" element={<Club />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
