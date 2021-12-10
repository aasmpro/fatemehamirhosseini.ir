import React from "react";

export const DetailedItem = ({
  title,
  association,
  location,
  from,
  to,
  desc,
  bullets,
}) => {
  return (
    <div className="py-2">
      <div className="flex flex-row justify-between items-start">
        <div>
          <div className="text-2xl">{title}</div>
          <div className="text-xl font-semibold">{association}</div>
        </div>
        <div className="text-right text-sm">
          <div>{from}</div>
          <div>{to}</div>
          <div>{location}</div>
        </div>
      </div>
      <div>
        {desc ? (
          <div className="pt-2">
            {desc.map((line) => (
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
