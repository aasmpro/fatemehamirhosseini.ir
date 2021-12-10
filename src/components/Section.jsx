import React from "react";

export const Section = ({ id, children }) => {
  return (
    <div id={id} className="py-8">
      {children}
    </div>
  );
};
