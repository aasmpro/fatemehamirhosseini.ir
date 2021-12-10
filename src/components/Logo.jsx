import React from "react";

export const Logo = () => {
  return (
    <a href={window.location.origin} className="cursor-pointer select-none">
      <div className="group w-[35px] h-[35px] max-w-[35px] max-h-[35px] min-w-[35px] min-h-[35px] bg-emerald-300 rounded-full transition duration-300 hover:ring-2 hover:ring-emerald-300 hover:bg-white">
        <div className="relative">
          <div className="absolute font-extrabold text-3xl left-[4px] text-white transition duration-300 group-hover:text-emerald-900">
            F
          </div>
          <div className="absolute font-extrabold text-3xl left-[13px] text-emerald-900 transition duration-300 group-hover:text-emerald-300">
            A
          </div>
        </div>
      </div>
    </a>
  );
};
