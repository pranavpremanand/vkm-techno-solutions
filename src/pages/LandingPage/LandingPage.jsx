import React, { useEffect } from "react";
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
import aboutUsImg from "../../assets/images/landing-aboutus.png";
import {
  appDevBanner,
  appLandingAbout,
  webDevBanner,
  webLandingAbout,
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  whyChooseUsPng,
} from "../../constant";
import TrustWorthyBox from "../../componets/TrustWorthyBox";
import Faqs from "../../componets/Faqs";

export const LandingPage = ({ page }) => {
  const isWebDevelopment = Boolean(page === "web-development");

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
    <>
      <div id="banner" className="h-screen relative">
        <img
          src={isWebDevelopment ? webDevBanner : appDevBanner}
          className="w-full h-full object-cover object-right absolute"
          alt=""
        />
        <div className="bg-gradient-to-r from-white/50 to-primary/20 absolute w-full h-full"></div>
        <div className="pt-[3rem] wrapper flex items-center h-full">
          <div className="relative z-10 px-6 justify-center h-full flex flex-col items-center gap-5 text-center md:max-w-[40rem]">
            <div className="rounded-text-box border-black font-medium text-white">
              {isWebDevelopment ? "Web Development" : "App Development"}
            </div>
            <h1 className="heading-1">
              Welcome to <br /> VKM Techno Solutions
            </h1>
            <p className="text-black/90 desc">
              We specialize in delivering cutting-edge IT solutions tailored to
              meet the unique needs of modern businesses.
            </p>
            <Link to="/webdevelopment" className="primary-btn mt-2">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <section id="about" className="py-[5rem] bg-black text-white wrapper">
        <div className="gradient-rounded-text-box mx-auto lg:mx-0">
          {isWebDevelopment ? "Web Development" : "App Development"}
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div className="flex h-full flex-col gap-7">
            <div className="flex flex-col gap-7">
              <h2 className="heading-2">
                {isWebDevelopment
                  ? "Innovative Web Development Solutions for Modern Brands"
                  : "Building Apps that Elevate Your Business with Our App Development Services."}
              </h2>
              <p className="desc">
                {isWebDevelopment
                  ? "Our approach to web development combines innovation with technical expertise. We deliver websites that capture your brand’s essence while delivering a seamless experience across all devices, helping you connect with users and drive growth."
                  : "Whether you’re a startup with a fresh idea or an established enterprise, we provide full-cycle app development services tailored to your unique goals. Our apps are designed to boost engagement, optimize performance, and scale with your business, giving you a competitive edge."}
              </p>
            </div>
            <div className="flex gap-5 mt-4">
              <Link className="primary-btn">Contact Us</Link>
              <Link className="secondary-btn">Our Services</Link>
            </div>
          </div>
          <div className="h-full">
            <img
              src={isWebDevelopment ? webLandingAbout : appLandingAbout}
              className="object-contain max-h-[30rem]"
              alt=""
            />
          </div>
        </div>
      </section>

      <Services page={page} />

      <section className="py-[5rem] bg-gradient-to-r from-secondary/30 to-primary/30">
        <div className="wrapper text-center text-white flex flex-col gap-7">
          <div className="gradient-rounded-text-box mx-auto">Why Choose Us</div>
          <div className="flex flex-col gap-5">
            <h2 className="heading-2">Magic Behind Our IT Solutions</h2>
            <p className="desc max-w-[40rem] mx-auto">
              We begin by conducting a comprehensive needs assessment to
              understand your specific requirements, challenges, and goals.
            </p>
            <div className="w-full block lg:hidden">
              <img
                src={whyChooseUsPng}
                className="object-contain max-h-[20rem] mx-auto"
                alt="why choose us"
              />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-5 mt-9">
              <div className="flex flex-col gap-5 h-full">
                <div className="p-5 border border-primary rounded-xl w-full h-full">
                  <div className="flex w-full text-start items-center justify-between gap-3">
                    <h5 className="text-xl">Technical Expertise</h5>
                    <img
                      src={whyChooseUsIcon1}
                      className="h-[3rem] object-contain mb-3"
                      alt=""
                    />
                  </div>
                  <p className="desc text-white/80 text-start mt-3">
                    A reputable IT company should possess a high level of
                    technical expertise.
                  </p>
                </div>
                <div className="p-5 border border-primary rounded-xl w-full h-full">
                  <div className="flex w-full text-start items-center justify-between gap-3">
                    <h5 className="text-xl">Innovation & Adaptability</h5>
                    <img
                      src={whyChooseUsIcon2}
                      className="h-[3rem] object-contain mb-3"
                      alt=""
                    />
                  </div>
                  <p className="desc text-white/80 text-start mt-3">
                    A reputable IT company should possess a high level of
                    technical expertise.
                  </p>
                </div>
              </div>
              <div className="w-full lg:block hidden">
                <img
                  src={whyChooseUsPng}
                  className="object-contain max-h-[25rem] mx-auto"
                  alt="why choose us"
                />
              </div>
              <div className="flex flex-col gap-5 h-full">
                <div className="p-5 border border-primary rounded-xl w-full h-full">
                  <div className="flex w-full text-start items-center justify-between gap-3">
                    <h5 className="text-xl">Effective Communication</h5>
                    <img
                      src={whyChooseUsIcon3}
                      className="h-[3rem] object-contain mb-3"
                      alt=""
                    />
                  </div>
                  <p className="desc text-white/80 text-start mt-3">
                    A reputable IT company should possess a high level of
                    technical expertise.
                  </p>
                </div>
                <div className="p-5 border border-primary rounded-xl w-full h-full">
                  <div className="flex w-full text-start items-center justify-between gap-3">
                    <h5 className="text-xl">Security and Compliance</h5>
                    <img
                      src={whyChooseUsIcon4}
                      className="h-[3rem] object-contain mb-3"
                      alt=""
                    />
                  </div>
                  <p className="desc text-white/80 text-start mt-3">
                    An IT company must prioritize cybersecurity and data
                    protection.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-[-10rem] pt-[3rem]">
            <TrustWorthyBox />
          </div>
        </div>
      </section>

      <section className="pt-[10rem] pb-[5rem] bg-black text-white">
        <div className="wrapper text-center flex flex-col gap-3">
          <div className="gradient-rounded-text-box mx-auto mb-4">
            Our Solutions
          </div>
          <h1 className="heading-1 bg-gradient-to-r from-[#7186FF_40%] md:min-h-[5rem] to-[#A502A8_50%] bg-clip-text text-transparent">
            Design & Revolution
          </h1>
          <p className="desc max-w-[50rem] mx-auto">
            At VKM Techno Solutions, we understand that in today’s digital-first
            world, your website is more than just an online presence—it’s the
            heart of your brand’s identity, a vital business tool, and often the
            first touchpoint for potential customers. In an era where first
            impressions matter more than ever, having a well-designed, fast, and
            responsive website is crucial to your business success. That’s why
            our website development services go beyond the basics—we aim to
            deliver not just a website, but a complete digital experience that
            drives engagement, boosts conversions, and empowers your business to
            grow.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-r from-secondary/80 to-primary/80 md:from-secondary/30 md:to-primary/30 overflow-hidden h-[70vh] relative flex items-center">
        <div className="wrapper">
          <div className="flex justify-center md:justify-normal gap-5">
            <div className="absolute -z-10 md:z-10 md:relative flex gap-5">
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
              className="flex z-10 flex-col gap-5 justify-center ml-10 text-white"
            >
              <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold font-raleway">
                Design
              </h2>
              <div className="flex items-center gap-2">
                <img
                  src={section5Img7}
                  className="sm:flex hidden h-[3rem] lg:h-[5rem] object-contain"
                  alt=""
                />
                <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold font-raleway">
                  & Recreate
                </h2>
              </div>
              <p className="desc text-white/70">
                Leverage your existing marketing platforms and sync the data
                seamlessly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <Faqs /> */}

      <section className="py-[5rem] text-white bg-gradient-to-r from-primary/30 to-secondary/30">
        <div className="wrapper flex flex-col text-white items-center gap-5 text-center">
          <div className="gradient-rounded-text-box">Unlock Efficiency</div>
          <h2 className="heading-2">Drive Innovation with Our IT Services</h2>
          <p className="desc max-w-[40rem] text-center">
            Empowering businesses to not just survive but to thrive and grow in
            the fast-paced, competitive digital landscape.
          </p>
          <Link className="primary-btn mt-3">Contact Us</Link>
        </div>
      </section>

      <section
        id="events"
        className="wrapper flex flex-col items-center justify-center py-14 text-center md:py-20 text-white"
      >
        <div data-aos="fade-up">
          <div className="flex justify-center flex-col">
            <div className="flex md:-translate-x-[30%]">
              <h2 className="text-[1rem] sm:text-3xl text-end font-raleway">
                One <br />
                Platform
              </h2>
              <h2 className="text-5xl sm:text-7xl font-raleway font-medium md:mt-1">
                Endless
              </h2>
            </div>
            <h2 className="text-5xl sm:text-7xl md:translate-x-[30%] font-raleway font-medium">
              Opportunities
            </h2>
          </div>
        </div>
      </section>

      <section className="pt-7 pb-[5rem] bg-black overflow-hidden">
        <div className="wrapper">
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

      <Contact />
    </>
  );
};
