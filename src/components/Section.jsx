import React, { useContext } from "react";

import { SettingsContext } from "../context/SettingsContext";

import { SectionItem } from "./SectionItem";
import { TransformText } from "./TransformText";

export const Section = ({ id, title, icon, items }) => {
  const stg = useContext(SettingsContext);

  return (
    <div id={id} className="sm:py-8 py-5">
      <div className="text-3xl font-extrabold pb-3">
        <i
          className={`${icon} mr-3 text-[28px] transition duration-500 hover:text-${stg.theme_color}-400 select-none`}
        />
        <TransformText>{title}</TransformText>
      </div>
      <div>
        {items?.map((item) => (
          <SectionItem {...item} />
        ))}
      </div>
    </div>
  );
};
