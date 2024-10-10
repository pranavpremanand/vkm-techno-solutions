import React, { useEffect } from "react";
import laptop from "../../../assets/images/banner-laptop.png";
import bgImg from "../../../assets/images/banner-bg.png";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { gsap } from "gsap";

const Banner = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("#bg-image", {
      scale: 1.3,
      duration: 2,
      ease: "power3.inOut",
      yoyo: true,
      repeat: -1,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="sm:h-screen">
      <div className="wrapper flex flex-col items-center gap-5 pt-14 text-center">
        <h1 className="py-4 bg-gradient-to-r from-[#7186FF] to-[#FE7587] bg-clip-text text-transparent text-5xl md:text-7xl font-bold">
          Design & Revolution
        </h1>
        <p className="text-white/70 max-w-[40rem]">
          We build world-class solutions to help your business evolve and reach
          the top.
        </p>
        <div className="flex items-center gap-2">
          <Link to="/webdevelopment" className="primary-btn">
            Demo
          </Link>
          <Link
            to="/"
            className="btn-styles flex items-center gap-3 border border-white/50 text-white"
          >
            <FaPlay className="text-[.9rem]" /> How it works
          </Link>
        </div>
      </div>
      <div className="w-full md:h-[70vh] flex justify-center items-center relative">
        <img
          id="bg-image"
          src={bgImg}
          className="object-contain w-3/4 mx-auto h-full absolute inset-0 -z-10"
          alt=""
        />
        <img src={laptop} className="object-contain h-5/6 sm:h-4/6 z-10" alt="" />
      </div>
    </div>
  );
};

export default Banner;
