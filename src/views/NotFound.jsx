import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col justify-center items-center">
      <div className="flex-col justify-center items-center text-center w-[270px]">
        <div className="text-9xl font-extrabold">404</div>
        <div className="text-xl font-bold">
          Nothing found and I have no idea what are you looking for!
        </div>
      </div>
      <Link
        to="/"
        className="text-xl font-bold bg-emerald-300 cursor-pointer px-3 mt-3 rounded-full transition duration-300 hover:ring-2 hover:ring-emerald-300 hover:bg-white text-emerald-900">
        Let's get back Home!
      </Link>
    </div>
  );
};
