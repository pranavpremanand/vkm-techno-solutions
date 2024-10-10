import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import section2Img1 from "../../assets/images/section2-img1.png";
import section2Img2 from "../../assets/images/section2-img2.png";
import section2Img3 from "../../assets/images/section2-img3.png";
import section2Img4 from "../../assets/images/section2-img4.png";
import section2Img5 from "../../assets/images/section2-img5.png";
import section2Img6 from "../../assets/images/app-dev-landing-1.jpg";
import section2Img7 from "../../assets/images/app-dev-landing-2.jpg";
import section3Img from "../../assets/images/section3-img.png";
import { Link, useLocation } from "react-router-dom";

const Features = () => {
  const { pathname } = useLocation();
  return (
    <div className="">
      <section
        id="features"
        className="sm:min-h-screen relative md:w-[95vw] overflow-hidden bg-white sm:-mt-[13rem]"
      >
        <div className="wrapper py-14">
          <p data-aos="fade-right" className="text-2xl font-medium">
            An unmatched attendee
          </p>
          <h2
            data-aos="fade-right"
            className="text-[4rem] sm:text-[7rem] md:text-[9rem] lg:text-[10rem] md:leading-[10rem] font-medium"
          >
            Experience
          </h2>
          <div className="mt-2 sm:mt-14">
            <div className="grid sm:grid-cols-5 sm:grid-rows-[15rem_15rem_15rem_15rem] gap-5">
              <div
                data-aos="fade-right"
                class="sm:col-span-2 sm:row-span-1 p-4 lg:p-14"
              >
                <p>Interactive overlays</p>
                <p className="text-sm text-gray-600">
                  Add custom branded graphics that lay over your live video to
                  intro speakers, emphasize key points, and display clickable
                  CTAs.
                </p>
              </div>
              <div data-aos="fade-left" class="sm:col-span-3 sm:row-span-2">
                <img
                  src={section2Img1}
                  class="w-full h-full object-cover"
                  alt="1"
                />
              </div>
              <div
                data-aos="fade-right"
                class="sm:col-span-2 sm:row-span-3 bg-[#6C666B]"
              >
                <img
                  src={
                    pathname === "/app-development" ? section2Img6 : section2Img3
                  }
                  class="w-full h-full object-cover"
                  alt="3"
                />
              </div>
              <div data-aos="fade-left" class="sm:col-span-3 sm:row-span-2">
                <img
                  src={pathname === "/app-development" ? section2Img7 : section2Img2}
                  class="w-full h-full object-cover"
                  alt="2"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 grid-rows-1 mt-5 gap-5">
              <div data-aos="fade-right" class="sm:row-span-1">
                <img
                  src={section2Img4}
                  class="w-full h-full object-cover"
                  alt="4"
                />
              </div>
              <div data-aos="fade-left" class="sm:row-span-1">
                <img
                  src={section2Img5}
                  class="w-full h-full object-cover"
                  alt="5"
                />
              </div>
            </div>
            <Link
              to="/"
              className="w-fit mt-8 mx-auto btn-styles flex items-center gap-3 border border-black/50"
            >
              See all features
              <FaArrowRightLong className="text-[.9rem]" />
            </Link>
          </div>
        </div>
      </section>

      <section className="sm:min-h-screen text-white">
        <div className="wrapper pt-14">
          <p data-aos="fade-right" className="text-xl sm:text-2xl font-medium">
            Powered by
          </p>
          <div className="flex md:grid gap-2 md:gap-0 grid-cols-3 items-center grid-rows-3 mt-5">
            <h2
              data-aos="fade-right"
              className="col-start-1 row-start-1 text-[2rem] sm:text-5xl md:text-[3.5rem] lg:text-[5rem] font-medium"
            >
              VKM
            </h2>
            <h2
              data-aos="fade-up"
              className="col-start-2 row-start-2 text-[2rem] sm:text-5xl md:text-[3.5rem] lg:text-[5rem] font-medium"
            >
              Techno
            </h2>
            <h2
              data-aos="fade-left"
              className="col-start-3 row-start-3 text-[2rem] sm:text-5xl md:text-[3.5rem] lg:text-[5rem] font-medium"
            >
              Solutions
            </h2>
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col md:flex-row sm:justify-between items-center bg-gradient-to-bl from-[#bea1a7] to-[#95b6cc] mt-8 md:mt-16 md:h-[60vh]"
          >
            <div className="flex flex-col gap-2 p-5 lg:p-10 text-black">
              <p className="text-lg font-medium">Drag-n-drop Agenda Builder</p>
              <p className="text-sm">
                Quickly rearrange your webinar’s sequence of actions and
                instantly generate an agenda that auto-updates as you move
                actions around.
              </p>
            </div>
            <img
              src={section3Img}
              className="h-[40vh] w-full md:w-7/12 object-cover md:h-full self-end"
              alt=""
            />
          </div>
        </div>
        <div className="wrapper mt-4">
          <div data-aos="fade-up" className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 bg-[#141414] sm:aspect-square">
              <p className="font-medium mb-3">Brand customization</p>
              <p className="text-sm">
                Brand the entire experience including registration pages,
                emails, backdrops, logo placements, fonts, overlays, and photo
                booth templates.
              </p>
            </div>
            <div className="p-5 bg-[#141414] sm:aspect-square">
              <p className="font-medium mb-3">Stage Kit</p>
              <p className="text-sm">
                Design branded overlays, lower thirds, and right-side gradients
                directly in the Welcome platform.
              </p>
            </div>
            <div className="p-5 bg-[#141414] sm:aspect-square">
              <p className="font-medium mb-3">Green Room</p>
              <p className="text-sm">
                Invite speakers to a private waiting room to meet and prep to go
                on stage.
              </p>
            </div>
          </div>
          <Link
            to="/"
            className="w-fit mt-8 mx-auto text-white btn-styles flex items-center gap-3 border border-white/50"
          >
            See all features
            <FaArrowRightLong className="text-[.9rem]" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Features;
