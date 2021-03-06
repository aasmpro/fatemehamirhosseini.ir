import React, { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

export const Loader = ({ is_loaded }) => {
  const stg = useContext(SettingsContext);
  return is_loaded ? null : (
    <div className="print:hidden fixed min-h-screen min-w-full z-50 flex flex-col justify-center items-center bg-white">
      <div
        className={`absolute min-w-[200px] min-h-[200px] rounded-full bg-${stg.theme_color}-300 animate-ping blur`}></div>
      <div
        className={`min-w-[50px] min-h-[50px] rounded-full bg-${stg.theme_color}-300 animate-pulse opacity-20`}></div>
    </div>
  );
};
