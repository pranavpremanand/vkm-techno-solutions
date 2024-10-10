import React, { useEffect } from "react";
import mobile from "../../../assets/images/mobile.png";
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
    <div id='banner' className="sm:h-screen">
      <div className="wrapper flex flex-col items-center gap-5 pt-14 text-center">
        <h1 data-aos="fade-left" className="py-4 bg-gradient-to-r from-[#7186FF] to-[#FE7587] bg-clip-text text-transparent text-5xl md:text-7xl font-bold">
        Your Vision, Our Code
        </h1>
        <p data-aos="fade-up" className="text-white/70 max-w-[40rem]">
          We build world-class solutions to help your business evolve and reach
          the top.
        </p>
        <div data-aos="fade-up" className="flex items-center gap-2">
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
      <div className="w-full md:h-[70vh] flex justify-center items-center relative mt-5 md:mt-0">
        <img
          id="bg-image"
          src={bgImg}
          className="object-contain w-4/5 mx-auto h-full absolute inset-0 -z-10"
          alt=""
        />
        <img data-aos="flip-left" src={mobile} className="object-contain h-5/6 sm:h-4/6 w-2/3 z-10" alt="" />
      </div>
    </div>
  );
};

export default Banner;