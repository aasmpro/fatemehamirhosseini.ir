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
      <div className="flex sm:flex-row flex-col justify-between items-start">
        <div>
          <div className="text-2xl font-bold text-green-900">{title}</div>
          <div className="sm:text-xl text-lg font-semibold">{association}</div>
        </div>
        <div className="sm:text-right text-sm -space-y-0.5">
          <div className="text-green-600">{from}</div>
          <div className="text-green-600">{to}</div>
          <div className="text-green-600">{location}</div>
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
