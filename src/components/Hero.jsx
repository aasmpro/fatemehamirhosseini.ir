import React from "react";

import { TransformText } from "./TransformText";

export const Hero = () => {
  return (
    <div
      id="Hero"
      className="flex flex-row items-center justify-center pt-3 pb-10">
      <div className="min-w-[250px] min-h-[250px] bg-green-300 rounded-full overflow-hidden mr-10">
        {/* here comes the image */}
      </div>
      <div className="font-extrabold">
        <div className="text-7xl -mb-6 -mt-2">
          <TransformText>Fatemeh</TransformText>
        </div>
        <div className="text-7xl">
          <TransformText>Amirhosseini</TransformText>
        </div>
        <div className="text-3xl">
          <TransformText>Mechanical Engineer</TransformText>
        </div>
        <div className="flex flex-row text-sm mt-2">
          <div className="bg-green-300 cursor-pointer pl-1.5 pr-3 rounded-full transition duration-300 hover:ring-2 hover:ring-green-300 hover:bg-white text-green-900 mr-1.5">
            <i class="fas fa-at mr-2 text-green-900" />
            <a href="mailto:Fa.amirhoseini7@gmail.com">Email</a>
          </div>
          <div className="bg-green-300 cursor-pointer pl-1.5 pr-3 rounded-full transition duration-300 hover:ring-2 hover:ring-green-300 hover:bg-white text-green-900 mr-1.5">
            <i className="fas fa-phone mr-2 text-green-900" />
            <a href="tel:+989135027900">Phone</a>
          </div>
          <div className="bg-green-300 cursor-pointer pl-1.5 pr-3 rounded-full transition duration-300 hover:ring-2 hover:ring-green-300 hover:bg-white text-green-900 mr-1.5">
            <i class="fab fa-linkedin-in mr-2 text-green-900" />
            <a href="https://www.linkedin.com/in/melika-amirhoseini-a116361b7/">
              LinkedIn
            </a>
          </div>
          <div className="bg-green-300 cursor-pointer pl-1.5 pr-3 rounded-full transition duration-300 hover:ring-2 hover:ring-green-300 hover:bg-white text-green-900">
            <i class="fab fa-twitter mr-2 text-green-900" />
            <a href="https://twitter.com/mkamirhosseini">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
};
