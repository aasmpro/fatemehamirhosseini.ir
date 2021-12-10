import React from "react";

export const TransformText = ({ children }) => {
  console.log(typeof children);
  return (
    <>
      {[...children].map((item) => (
        <span className="transition duration-500 hover:text-green-300">
          {item}
        </span>
      ))}
    </>
  );
};
