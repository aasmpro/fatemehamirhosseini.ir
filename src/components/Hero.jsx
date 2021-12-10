import React from "react";

import { TransformText } from "./TransformText";

export const Hero = ({ image, first_name, last_name, title, links }) => {
  return (
    <div
      id="Hero"
      className="flex flex-row flex-wrap items-center justify-center pt-3">
      <div className="w-[250px] h-[250px] min-w-[250px] min-h-[250px] max-w-[250px] max-h-[250px] bg-emerald-300 border-4 border-emerald-300 rounded-full overflow-hidden mx-5 mb-10 flex flex-col justify-center">
        <img
          className="w-[250px] h-[250px] min-w-[250px] min-h-[250px] max-w-[250px] max-h-[250px] object-cover"
          alt="ProfileImage"
          src={image}
        />
      </div>
      <div className="font-extrabold mx-5 mb-10">
        <div className="sm:text-7xl sm:-mb-6 sm:-mt-2 text-5xl -mb-3">
          <TransformText>{first_name}</TransformText>
        </div>
        <div className="sm:text-7xl text-4xl">
          <TransformText>{last_name}</TransformText>
        </div>
        <div className="sm:text-3xl text-xl">
          <TransformText>{title}</TransformText>
        </div>
        <div className="font-bold flex flex-row flex-wrap">
          {links?.map((item) => (
            <div className="mt-2 bg-emerald-300 cursor-pointer px-3 pt-0.5 sm:pt-0 rounded-full transition duration-300 hover:ring-2 hover:ring-emerald-300 hover:bg-white text-emerald-900 mr-1.5 whitespace-nowrap select-none">
              <i className={`${item.icon} mr-2 text-emerald-900`} />
              <a href={item.href}>{item.title}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
