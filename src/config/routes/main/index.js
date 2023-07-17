import React from "react";
import { Route, Routes } from "react-router-dom";

import { HomePage } from "../../../pages/main/home/components";
import Main from "../../../pages/main";
import History from "../../../pages/main/history";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/history" element={<History />} />
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
