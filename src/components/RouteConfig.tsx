import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataSearch, Home, TrendGraph } from "../templates";
import NotFound from "../templates/NotFound";

const RouteConfig: React.VFC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DataSearch" element={<DataSearch />} />
          <Route path="/TrendGraph" element={<TrendGraph />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouteConfig;
