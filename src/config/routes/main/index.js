import React from "react";
import { Route, Routes } from "react-router-dom";

import { HomePage } from "../../../pages/main/home";
import Main from "../../../pages/main";
import History from "../../../pages/main/history";
import Actuality from "../../../pages/main/actuality";
import Club from "../../../pages/main/club";
import Portfolio from "../../../pages/main/portfolio/components";
import Contact from "../../../pages/main/contact";
import Staff from "../../../pages/main/staff";
import Gallery from "../../../pages/main/gallery";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/history" element={<History />} />
        <Route path="/actuality" element={<Actuality />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/club" element={<Club />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
