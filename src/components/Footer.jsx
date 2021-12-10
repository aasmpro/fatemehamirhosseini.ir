import React from "react";

export const Footer = ({ children }) => {
  return (
    <div className="pt-5 pb-10 flex flex-col justify-center items-center">
      <div className="text-xs">{children}</div>
    </div>
  );
};
