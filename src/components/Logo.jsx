import React from "react";

export const Logo = () => {
  return (
    <a href={window.location.origin} className="cursor-pointer select-none">
      <div className="group min-w-[50px] min-h-[50px] bg-green-300 rounded-full transition duration-300 hover:ring-2 hover:ring-green-300 hover:bg-white">
        <div className="relative">
          <div className="absolute font-extrabold text-4xl left-[9px] top-[4px] text-white transition duration-300 group-hover:text-green-900">
            F
          </div>
          <div className="absolute font-extrabold text-4xl left-[21px] top-[4px] text-green-900 transition duration-300 group-hover:text-green-300">
            A
          </div>
        </div>
      </div>
    </a>
  );
};
