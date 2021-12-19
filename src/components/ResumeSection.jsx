import React from "react";

import { ResumeSectionItem } from "./ResumeSectionItem";

export const ResumeSection = ({ title, icon, items }) => {
  return (
    <div className="py-3">
      <div className="text-2xl font-extrabold pb-2">
        <i className={`${icon} mr-3 text-[22px] select-none`} />
        {title}
      </div>
      <div>
        {items?.map((item) => (
          <ResumeSectionItem {...item} />
        ))}
      </div>
    </div>
  );
};
