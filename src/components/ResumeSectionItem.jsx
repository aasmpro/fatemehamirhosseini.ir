import React from "react";

export const ResumeSectionItem = ({
  title,
  association,
  location,
  from,
  to,
  desc,
  bullets,
}) => {
  return (
    <div className="py-1.5">
      <div className="flex flex-row justify-between items-start">
        <div>
          <div className="text-lg font-extrabold text-emerald-700">{title}</div>
          <div className="text-md font-extrabold">{association}</div>
        </div>
        <div className="text-right text-xs -space-y-0.5">
          <div className="text-emerald-700">{from}</div>
          <div className="text-emerald-700">{to}</div>
          <div className="text-emerald-700">{location}</div>
        </div>
      </div>
      <div>
        {desc ? (
          <div className="pt-1">
            {desc.map((line) => (
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
