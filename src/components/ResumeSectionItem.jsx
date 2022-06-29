import React, { useContext } from "react";

import { SettingsContext } from "../context/SettingsContext";

export const ResumeSectionItem = ({
  title,
  association,
  location,
  from_date,
  to_date,
  description,
  bullets,
}) => {
  const stg = useContext(SettingsContext);

  return (
    <div className="py-0.5">
      <div className="flex flex-row justify-between items-start">
        <div>
          <div className={`text-lg font-extrabold text-${stg.resume_color}-700`}>
            {title}
          </div>
          <div className="text-sm font-bold -mt-0.5">{association}</div>
        </div>
        <div className="text-right text-xs -space-y-0.5">
          <div className={`text-${stg.resume_color}-700`}>{from_date}</div>
          <div className={`text-${stg.resume_color}-700`}>{to_date}</div>
          <div className={`text-${stg.resume_color}-700`}>{location}</div>
        </div>
      </div>
      <div>
        {description ? (
          <div className="pt-0.5">
            {description.map((line) => (
              <p>{line}</p>
            ))}
          </div>
        ) : null}
        {bullets ? (
          <ul className="list-disc pl-5 pt-1">
            {bullets.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};
