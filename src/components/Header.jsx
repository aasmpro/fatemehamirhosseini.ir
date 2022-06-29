import React, { useState, useEffect, useContext } from "react";

import { getID } from "../core/utils";
import { API, getURL } from "../core/api";
import { SettingsContext } from "../context/SettingsContext";
import { Logo } from "./Logo";

export const Header = ({ items }) => {
  const stg = useContext(SettingsContext);
  const [resume_file, set_resume_file] = useState({});

  const getResumeFile = () => {
    API.get
      .resume_file()
      .then((response) => {
        if (response.success) {
          set_resume_file(response.data);
        } else {
          console.log(response.message);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getResumeFile();
  }, []);

  return (
    <div className="flex flex-row pt-6 pb-8 px-6 lg:px-10 justify-between items-center text-lg">
      <Logo />
      {items && items.length < 7 ? (
        <div className="lg:flex lg:flex-row md:space-x-5 hidden">
          {items?.map((item) => (
            <div
              className={`px-2 transition rounded-full duration-300 hover:ring-2 hover:ring-${stg.theme_color}-300`}>
              <a href={`#${getID(item.title)}`}>{item.title}</a>
            </div>
          ))}
        </div>
      ) : null}
      <div
        className={`bg-${stg.theme_color}-300 cursor-pointer pl-1 pr-3 rounded-full transition duration-300 hover:ring-2 hover:ring-${stg.theme_color}-300 hover:bg-white text-${stg.theme_color}-900 whitespace-nowrap select-none`}>
        {resume_file?.url ? (
          <a href={getURL(resume_file.url)} target="_blank" rel="noreferrer">
            <i
              class={`fas fa-arrow-circle-down mr-2 text-${stg.theme_color}-900`}
            />
            <span className={`font-bold text-${stg.theme_color}-900`}>
              Resume
            </span>
          </a>
        ) : (
          <div onClick={() => window.print()}>
            <i
              class={`fas fa-arrow-circle-down mr-2 text-${stg.theme_color}-900`}
            />
            <span className={`font-bold text-${stg.theme_color}-900`}>
              Resume
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
