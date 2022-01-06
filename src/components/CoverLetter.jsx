import React from "react";

export const CoverLetter = ({ description }) => {
  return (
    <div className="md:pt-12 pt-8 pb-5">
      <div className="text-lg md:text-xl">
        {description ? description.map((line) => <p>{line}</p>) : null}
      </div>
    </div>
  );
};
