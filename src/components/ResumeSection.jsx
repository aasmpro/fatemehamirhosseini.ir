import React from "react";

import { ResumeSectionItem } from "./ResumeSectionItem";

export const ResumeSection = ({ name, icon, items }) => {
  return (
    <div className="py-3">
      <div className="text-2xl font-extrabold pb-2">
        <i className={`${icon} mr-3 text-[22px] select-none`} />
        {name}
      </div>
      <div>
        {items?.map((item) => (
          <ResumeSectionItem {...item} />
        ))}
      </div>
    </div>
  );
};
