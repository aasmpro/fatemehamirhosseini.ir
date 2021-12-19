import React, { useContext } from "react";

import { SettingsContext } from "../context/SettingsContext";

export const SectionItem = ({
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
    <div className="py-2">
      <div className="flex sm:flex-row flex-col justify-between items-start">
        <div>
          <div className={`text-2xl font-bold text-${stg.theme_color}-700`}>
            {title}
          </div>
          <div className="sm:text-xl text-lg font-semibold">{association}</div>
        </div>
        <div className="sm:text-right text-sm -space-y-0.5">
          <div className={`text-${stg.theme_color}-600`}>{from_date}</div>
          <div className={`text-${stg.theme_color}-600`}>{to_date}</div>
          <div className={`text-${stg.theme_color}-600`}>{location}</div>
        </div>
      </div>
      <div>
        {description ? (
          <div className="pt-2">
            {description.map((line) => (
              <p>{line}</p>
            ))}
          </div>
        ) : null}
        {bullets ? (
          <ul className="list-disc pl-5 pt-2">
            {bullets.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};
