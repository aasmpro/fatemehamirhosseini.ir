import React from "react";

import { Logo } from "./Logo";

export const Header = () => {
  return (
    <div className="flex flex-row py-6 justify-between items-center text-lg">
      <Logo />
      <div className="sm:flex sm:flex-row sm:space-x-2 md:space-x-8 hidden">
        <div className="px-2 transition rounded-full duration-300 hover:ring-2 hover:ring-emerald-300">
          <a href="#education">Education</a>
        </div>
        <div className="px-2 transition rounded-full duration-300 hover:ring-2 hover:ring-emerald-300">
          <a href="#experiences">Experiences</a>
        </div>
        <div className="px-2 transition rounded-full duration-300 hover:ring-2 hover:ring-emerald-300">
          <a href="#achievements">Achievements</a>
        </div>
        <div className="px-2 transition rounded-full duration-300 hover:ring-2 hover:ring-emerald-300">
          <a href="#skills">Skills</a>
        </div>
      </div>
      <div className="bg-emerald-300 cursor-pointer pl-1.5 pr-3 rounded-full transition duration-300 hover:ring-2 hover:ring-emerald-300 hover:bg-white text-emerald-900 whitespace-nowrap select-none">
        <i class="fas fa-arrow-circle-down mr-2 text-emerald-900" />
        <span className="font-bold text-emerald-900">Resume</span>
      </div>
    </div>
  );
};
