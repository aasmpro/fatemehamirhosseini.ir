import React from "react";

import { TransformText } from "./TransformText";

export const Hero = () => {
  return (
    <div
      id="Hero"
      className="flex flex-row flex-wrap items-center justify-center pt-3">
      <div className="min-w-[250px] min-h-[250px] bg-green-300 rounded-full overflow-hidden mx-5 mb-10">
        {/* here comes the image */}
      </div>
      <div className="font-extrabold mx-5 mb-10">
        <div className="sm:text-7xl sm:-mb-6 sm:-mt-2 text-5xl -mb-3">
          <TransformText>Fatemeh</TransformText>
        </div>
        <div className="sm:text-7xl text-4xl">
          <TransformText>Amirhosseini</TransformText>
        </div>
        <div className="sm:text-3xl text-xl">
          <TransformText>Mechanical Engineer</TransformText>
        </div>
        <div className="flex flex-row flex-wrap">
          <div className="mt-2 bg-green-300 cursor-pointer pl-1.5 pr-3 rounded-full transition duration-300 hover:ring-2 hover:ring-green-300 hover:bg-white text-green-900 mr-1.5 whitespace-nowrap select-none">
            <i class="fas fa-at mr-2 text-green-900" />
            <a href="mailto:Fa.amirhoseini7@gmail.com">Email</a>
          </div>
          <div className="mt-2 bg-green-300 cursor-pointer pl-1.5 pr-3 rounded-full transition duration-300 hover:ring-2 hover:ring-green-300 hover:bg-white text-green-900 mr-1.5 whitespace-nowrap select-none">
            <i className="fas fa-phone mr-2 text-green-900" />
            <a href="tel:+989135027900">Phone</a>
          </div>
          <div className="mt-2 bg-green-300 cursor-pointer pl-1.5 pr-3 rounded-full transition duration-300 hover:ring-2 hover:ring-green-300 hover:bg-white text-green-900 mr-1.5 whitespace-nowrap select-none">
            <i class="fab fa-linkedin-in mr-2 text-green-900" />
            <a href="https://www.linkedin.com/in/melika-amirhoseini-a116361b7/">
              LinkedIn
            </a>
          </div>
          <div className="mt-2 bg-green-300 cursor-pointer pl-1.5 pr-3 rounded-full transition duration-300 hover:ring-2 hover:ring-green-300 hover:bg-white text-green-900 whitespace-nowrap select-none">
            <i class="fab fa-twitter mr-2 text-green-900" />
            <a href="https://twitter.com/mkamirhosseini">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
};
