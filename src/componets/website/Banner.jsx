import React from "react";
import { defaultBanner } from "../../constant";

const Banner = ({ page }) => {
  return (
    <div data-aos="fade-down" className="h-[40vh] sm:h-[45vh] md:h-[60vh] relative">
      <img src={defaultBanner} className="object-cover h-full w-full" alt="" />
      <h2 className="font-raleway text-[2.15rem] md:text-7xl font-bold leading-tight text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        {page}
      </h2>
    </div>
  );
};

export default Banner;
