import React from "react";
import {
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  whyChooseUsContent,
} from "../../constant";
import UnlockEfficiency from "../../components/common/UnlockEfficiency";
import OurServices from "../../components/website/OurServices";
import Testimonials from "../../components/common/Testimonials";

const AboutUs = () => {
  return (
    <>
      <div
        data-aos="fade-down"
        className="h-[40vh] sm:h-[55vh] md:h-[70vh] relative"
      >
        <img
          src={aboutUsBanner}
          className="object-cover object-[100%_35%] h-full w-full"
          alt=""
        />
      </div>
      <div className="py-[5rem] text-white text-center">
        <div className="wrapper flex flex-col items-center gap-5 mb-[5rem]">
          <div data-aos='fade-up' className="gradient-rounded-text-box">About Us</div>
          <h2 data-aos='fade-up' className="heading-2">Magic Behind Our IT Solutions</h2>
          <p data-aos='fade-up' className="desc max-w-[50rem]">
            We begin by conducting a comprehensive needs assessment to
            understand your specific requirements, challenges, and goals.
          </p>
          <div className="pt-[3rem]">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div data-aos='fade-right' className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80">
                  <h6 className="font-bold text-lg font-raleway">
                    Innovation at Heart
                  </h6>
                  <p className="desc mt-2">
                    At VKM Techno Solutions, innovation is our driving force. We
                    constantly explore emerging technologies and trends to
                    create future-ready solutions that push the boundaries of
                    what’s possible. We aim to deliver solutions that not only
                    solve today’s challenges but anticipate the needs of
                    tomorrow.
                  </p>
                </div>
                <div data-aos='fade-left' className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg1}
                    alt="Innovation at Heart"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div data-aos='fade-right' className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg2}
                    alt="Client-Centric Approach"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
                <div data-aos='fade-left' className="rounded-xl p-5 bg-gradient-to-r from-secondary/60 to-secondary/80">
                  <h6 className="font-bold text-lg font-raleway">
                    Client-Centric Approach
                  </h6>
                  <p className="desc mt-2">
                    We understand that every business is unique, and so are its
                    challenges and goals. We take a highly personalized
                    approach, tailoring each project to align perfectly with
                    your specific needs. From startups to enterprises, we work
                    closely with our clients, building long-term partnerships
                    grounded in trust, transparency, and mutual success.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-10 sm:gap-5 max-w-5xl mx-auto">
                <div data-aos='fade-right' className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80">
                  <h6 className="font-bold text-lg font-raleway">
                    Commitment to Excellence
                  </h6>
                  <p className="desc mt-2">
                    Quality and reliability are at the core of everything we do.
                    We pride ourselves on delivering world-class digital
                    products that are robust, scalable, and secure. Every
                    project undergoes rigorous quality assurance, ensuring that
                    we exceed expectations and industry standards at every turn.
                  </p>
                </div>
                <div data-aos='fade-left' className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg3}
                    alt="Commitment to Excellence"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div data-aos='fade-right' className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg4}
                    alt="Innovation with Purpose"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
                <div data-aos='fade-left' className="rounded-xl p-5 bg-gradient-to-r from-secondary/60 to-secondary/80">
                  <h6 className="font-bold text-lg font-raleway">
                    Innovation with Purpose
                  </h6>
                  <p className="desc mt-2">
                    Technology without purpose is meaningless. At VKM Techno
                    Solutions, we believe in leveraging technology to create
                    meaningful impact—whether it’s streamlining processes,
                    enhancing customer experiences, or driving growth. Our
                    solutions are designed to transform businesses, help them
                    scale, and lead in their industries.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div data-aos='fade-right' className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80">
                  <h6 className="font-bold text-lg font-raleway">
                    End to End Solutions
                  </h6>
                  <p className="desc mt-2">
                    We offer a complete suite of services, providing holistic
                    support from concept to deployment and beyond. Our goal is
                    to be your trusted partner throughout your entire digital
                    journey—whether it’s building your online presence,
                    automating your operations, or creating immersive
                    experiences for your customers.
                  </p>
                </div>
                <div data-aos='fade-left' className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg5}
                    alt="End to End Solutions"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <UnlockEfficiency />
        <div className="wrapper mt-[5rem]">
          <h2 data-aos='fade-up' className="heading-2">Why Choose VKM Techno Solutions?</h2>
          <ul className="mt-[2rem] flex flex-col gap-3 list-disc list-outside text-start">
            {whyChooseUsContent.map((item) => (
              <li data-aos='fade-up' key={item.id} className="text-[#CF00FE]">
                <span className="font-raleway font-bold">{item.title}:</span>{" "}
                <span className="desc text-white ml-1">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <OurServices length={3} />
      <Testimonials/>
    </>
  );
};

export default AboutUs;
