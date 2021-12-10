import React from "react";

import { Logo } from "./Logo";

export const Header = () => {
  return (
    <div className="flex flex-row py-6 justify-between items-center text-lg">
      <Logo />
      <div className="sm:flex sm:flex-row sm:space-x-2 md:space-x-8 hidden">
        <div className="px-2 transition rounded-full duration-300 hover:ring-2 hover:ring-green-300">
          <a href="#education">Education</a>
        </div>
        <div className="px-2 transition rounded-full duration-300 hover:ring-2 hover:ring-green-300">
          <a href="#experiences">Experiences</a>
        </div>
        <div className="px-2 transition rounded-full duration-300 hover:ring-2 hover:ring-green-300">
          <a href="#achievements">Achievements</a>
        </div>
        <div className="px-2 transition rounded-full duration-300 hover:ring-2 hover:ring-green-300">
          <a href="#skills">Skills</a>
        </div>
      </div>
      <div className="bg-green-300 cursor-pointer pl-1.5 pr-3 rounded-full transition duration-300 hover:ring-2 hover:ring-green-300 hover:bg-white text-green-900 whitespace-nowrap select-none">
        <i class="fas fa-arrow-circle-down mr-2 text-green-900" />
        Resume
      </div>
    </div>
  );
};
