import React from "react";

export const Section = ({ id, children }) => {
  return (
    <div id={id} className="sm:py-8 py-5">
      {children}
    </div>
  );
};
