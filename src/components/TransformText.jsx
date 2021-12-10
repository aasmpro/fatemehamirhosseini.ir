import React from "react";

export const TransformText = ({ children }) => {
  console.log(typeof children);
  return (
    <>
      {children
        ? [...children].map((item) => (
            <span className="transition duration-500 hover:text-emerald-300 select-none">
              {item}
            </span>
          ))
        : null}
    </>
  );
};
