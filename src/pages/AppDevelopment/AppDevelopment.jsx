import React, { useEffect } from "react";
import Banner from "./components/Banner";
import section1Img from "../../assets/images/div.png";
import { Link } from "react-router-dom";
import section5Img1 from "../../assets/images/section-5-img-1.png";
import section5Img2 from "../../assets/images/section-5-img-2.png";
import section5Img3 from "../../assets/images/section-5-img-3.png";
import section5Img4 from "../../assets/images/section-5-img-4.png";
import section5Img5 from "../../assets/images/section-5-img-5.png";
import section5Img6 from "../../assets/images/section-5-img-6.png";
import section5Img7 from "../../assets/images/section-5-img-7.png";
import gsap from "gsap";
import Testimonials from "../../componets/Testimonials";
import joinusImg from "../../assets/images/join-us-section.png";
import section8Img1 from "../../assets/images/section-8-img-1.png";
import section8Img2 from "../../assets/images/section-8-img-2.png";
import section8Img3 from "../../assets/images/section-8-img-3.png";
import Features from "../../componets/LandingPage/Features";
import Services from "../../componets/LandingPage/Services";
import Blogs from "../../componets/LandingPage/Blogs";
import Contact from "../../componets/LandingPage/Contact";

export const AppDevelopment = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("#to-bottom", {
      y: -200,
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: "back.inOut",
    })
      .to("#to-top", {
        y: 200,
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: "back.inOut",
        delay: 0.5,
      })
      .to("#from-right", {
        x: -300,
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: "back.inOut",
      })
      .to("#from-left", {
        x: 300,
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: "back.inOut",
        delay: 1,
      });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div>
      <Banner />
      <section className="sm:min-h-screen text-white pt-[7rem]">
        <div data-aos="fade-left" className="wrapper">
          <div className="grid sm:grid-cols-[60%_40%] items-center gap-5">
            <div className="w-full">
              <div className="flex flex-col gap-5 max-w-[30rem]">
                <h2 className="text-4xl">
                  World-class teams are upgrading to Welcome
                </h2>
                <p className="text-white/70">
                  Companies are ditching legacy platforms for the ability to
                  deliver an engaging experience at every level.
                </p>
              </div>
            </div>
            <img
              src={section1Img}
              className="w-full h-[40vh] sm:h-[50vh] object-contain"
              alt=""
            />
          </div>
        </div>
      </section>

      <Features />

      <section
        id="services"
        className="sm:min-h-screen bg-section4 bg-no-repeat bg-cover w-full mt-14"
      >
        <div className="wrapper grid sm:grid-cols-[45%_53%] gap-5 pt-14">
          <h2
            data-aos="fade-right"
            className="text-4xl sm:text-5xl leading-tight font-medium"
          >
            Services We <br /> Provide
          </h2>
          <div data-aos="fade-left" className="flex flex-col gap-5 items-start">
            <p className="text-white">
              We build stunning websites and powerful applications that elevate
              your brand and drive business growth. Our expert team delivers
              custom solutions, from engaging UI/UX design to robust development
              and rigorous testing, ensuring a seamless digital experience for
              your audience.
            </p>
            <Link to="/" className="primary-btn">
              Learn more
            </Link>
          </div>
        </div>
        <div className="wrapper mt-10">
          <Services />
        </div>
        <div className="bg-[#f5f5f5] overflow-hidden h-[70vh] relative flex items-center">
          <div className="wrapper">
            <div className="flex justify-center md:justify-normal gap-5">
              <div className="absolute z-10 md:relative flex gap-5">
                <div id="to-top" className="flex flex-col -translate-y-[20%]">
                  <img
                    src={section5Img1}
                    className="h-[10rem] object-contain"
                    alt={"section5Img1"}
                  />
                  <img
                    src={section5Img2}
                    className="h-[10rem] object-contain"
                    alt={"section5Img1"}
                  />
                  <img
                    src={section5Img3}
                    className="h-[10rem] object-contain"
                    alt={"section5Img1"}
                  />
                </div>
                <div id="to-bottom" className="flex flex-col translate-y-[20%]">
                  <img
                    src={section5Img4}
                    className="h-[10rem] object-contain"
                    alt={"section5Img1"}
                  />
                  <img
                    src={section5Img5}
                    className="h-[10rem] object-contain"
                    alt={"section5Img1"}
                  />
                  <img
                    src={section5Img6}
                    className="h-[10rem] object-contain"
                    alt={"section5Img1"}
                  />
                </div>
              </div>
              <div
                data-aos="fade-left"
                className="flex z-10 flex-col gap-5 justify-center ml-10"
              >
                <h2 className="text-5xl md:text-6xl lg:text-8xl font-medium">
                  Design
                </h2>
                <div className="flex items-center gap-2">
                  <img
                    src={section5Img7}
                    className="sm:flex hidden h-[3rem] lg:h-[5rem] object-contain"
                    alt=""
                  />
                  <h2 className="text-5xl md:text-6xl lg:text-8xl font-medium">
                    & Recreate
                  </h2>
                </div>
                <p className="text-sm">
                  Leverage your existing marketing platforms and sync the data
                  seamlessly
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper py-20">
          <h2
            data-aos="fade-right"
            className="text-5xl sm:text-7xl font-medium text-white lg:text-black"
          >
            Loved & <br /> trusted
          </h2>
          <div data-aos="fade-up" className="py-14">
            <Testimonials />
          </div>
        </div>
      </section>

      <section
        id="events"
        className="wrapper flex flex-col items-center justify-center pb-14 text-center md:py-20 text-white"
      >
        <div
          data-aos="fade-up"
          className="flex flex-col gap-10 items-center w-full"
        >
          <div className="flex justify-center flex-col">
            <div className="flex md:-translate-x-[30%]">
              <div>
                <h2 className="text-[1rem] sm:text-3xl text-end">
                  One <br />
                  platform
                </h2>
              </div>
              <h2 className="text-5xl sm:text-7xl">Endless</h2>
            </div>
            <h2 className="text-5xl sm:text-7xl md:translate-x-[30%]">
              Opportunities
            </h2>
          </div>
          <div className="flex justify-between w-full max-w-md md:max-w-xl mt-4">
            <ul className="flex flex-col gap-3 text-white/70">
              <li>Webinars</li>
              <li>Product Demos</li>
              <li>Community Events</li>
              <li>AMAs</li>
              <li>Multi-track</li>
            </ul>
            <ul className="flex flex-col gap-3 text-white/70">
              <li>Company Meetings</li>
              <li>Customer Training</li>
              <li>Fireside Chat</li>
              <li>Kick-offs</li>
              <li>Workshops</li>
            </ul>
          </div>
        </div>
      </section>

      <Blogs />

      <section className="bg-black pt-14 text-white">
        <div data-aos="fade-up" className="wrapper">
          <div className="flex items-center justify-between">
            <h2 className="text-5xl sm:text-6xl">Join us</h2>
            <Link className="btn-styles bg-black border border-white/40 text-white">
              All events
            </Link>
          </div>
          <div className="my-5 w-full flex justify-between border-t border-r rounded-se-3xl border-white/70">
            <div className="flex flex-col gap-5 py-5">
              <div className="flex flex-col gap-2">
                <small className="btn-styles w-fit bg-black border border-white/40 text-white">
                  December 21, 2022
                </small>
              </div>
              <h2 className="text-3xl sm:text-4xl">
                Attention-Grabbing Marketing in a Noisy Market
              </h2>
              <button className="primary-btn w-fit">Register</button>
            </div>
            <img
              src={joinusImg}
              className="sm:block hidden w-1/4 h-full mt-3 mr-3 object-contain"
              alt=""
            />
          </div>
        </div>
      </section>

      <Contact />

      <section className="py-14 bg-white overflow-hidden">
        <div className="wrapper flex flex-col items-center gap-5 text-center">
          <h2 data-aos="fade-up" className="text-5xl sm:text-7xl font-medium">
            Experience <br /> Welcome
          </h2>
          <p data-aos="fade-up" className="text-sm">
            A webinar platform designed for marketers to host jaw-dropping
            experiences that drive revenue.
          </p>
          <button data-aos="fade-up" className="primary-btn">
            Request a demo
          </button>

          <div className="flex flex-col gap-5 mt-5">
            <div
              id="from-right"
              className="flex items-center gap-2 translate-x-[10%] md:translate-x-[25vw]"
            >
              <img
                src={section8Img1}
                className="h-[4rem] md:h-[7rem] object-cover rounded-full"
                alt=""
              />
              <img
                src={section8Img2}
                className="h-[4rem] md:h-[7rem] object-cover rounded-full"
                alt=""
              />
              <img
                src={section8Img3}
                className="h-[4rem] md:h-[7rem] object-cover rounded-full"
                alt=""
              />
              <img
                src={section8Img2}
                className="h-[4rem] md:h-[7rem] object-cover rounded-full"
                alt=""
              />
            </div>

            <div
              id="from-left"
              className="flex items-center gap-2 -translate-x-[100%] md:-translate-x-[25vw]"
            >
              <img
                src={section8Img3}
                className="h-[4rem] md:h-[7rem] object-cover rounded-full"
                alt=""
              />
              <img
                src={section8Img2}
                className="h-[4rem] md:h-[7rem] object-cover rounded-full"
                alt=""
              />
              <img
                src={section8Img3}
                className="h-[4rem] md:h-[7rem] object-cover rounded-full"
                alt=""
              />
              <img
                src={section8Img1}
                className="h-[4rem] md:h-[7rem] object-cover rounded-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopment;