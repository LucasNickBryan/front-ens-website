import React from "react";
import { Route, Routes } from "react-router-dom";

import { HomePage } from "../../../pages/main/home/components";
import Main from "../../../pages/main";
import History from "../../../pages/main/history/components";
import Actuality from "../../../pages/main/actuality/components";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/history" element={<History />} />
        <Route path="/actuality" element={<Actuality />} />
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
