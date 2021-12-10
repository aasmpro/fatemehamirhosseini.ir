import React from "react";

import { SectionItem } from "./SectionItem";
import { TransformText } from "./TransformText";

export const Section = ({ id, name, icon, items }) => {
  return (
    <div id={id} className="sm:py-8 py-5">
      <div className="text-3xl font-extrabold pb-3">
        <i
          className={`${icon} mr-3 text-[28px] transition duration-500 hover:text-emerald-300 select-none`}
        />
        <TransformText>{name}</TransformText>
      </div>
      <div>
        {items?.map((item) => (
          <SectionItem {...item} />
        ))}
      </div>
    </div>
  );
};
