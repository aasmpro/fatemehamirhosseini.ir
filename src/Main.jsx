import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { API } from "./core/api";
import { SettingsContext } from "./context/SettingsContext";

import { Home } from "./views/Home";
import { NotFound } from "./views/NotFound";

export const Main = () => {
  const [site_setting, set_site_setting] = useState({});

  const getSiteSetting = () => {
    API.get
      .site_setting()
      .then((response) => {
        if (response.success) {
          set_site_setting(response.data);
          document.title = response.data.title;
        } else {
          console.log(response.message);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getSiteSetting();
  }, []);

  return (
    <SettingsContext.Provider value={site_setting}>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </SettingsContext.Provider>
  );
};
