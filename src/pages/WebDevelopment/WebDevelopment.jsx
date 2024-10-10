import React, { useEffect } from "react";
import Banner from "./components/Banner";
import section1Img from "../../assets/images/div.png";
import section2Img1 from "../../assets/images/section2-img1.png";
import section2Img2 from "../../assets/images/section2-img2.png";
import section2Img3 from "../../assets/images/section2-img3.png";
import section2Img4 from "../../assets/images/section2-img4.png";
import section2Img5 from "../../assets/images/section2-img5.png";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import section3Img from "../../assets/images/section3-img.png";
import section4Img1 from "../../assets/images/section-4-img-1.png";
import section4Img2 from "../../assets/images/section-4-img-2.png";
import section4Img3 from "../../assets/images/section-4-img-3.png";
import section4Img4 from "../../assets/images/section-4-img-4.png";
import section4Img5 from "../../assets/images/section-4-img-5.png";
import section5Img1 from "../../assets/images/section-5-img-1.png";
import section5Img2 from "../../assets/images/section-5-img-2.png";
import section5Img3 from "../../assets/images/section-5-img-3.png";
import section5Img4 from "../../assets/images/section-5-img-4.png";
import section5Img5 from "../../assets/images/section-5-img-5.png";
import section5Img6 from "../../assets/images/section-5-img-6.png";
import section5Img7 from "../../assets/images/section-5-img-7.png";
import gsap from "gsap";
import Testimonials from "./components/Testimonials";
import section6Img1 from "../../assets/images/section-6-img-1.png";
import section6Img2 from "../../assets/images/section-6-img-2.png";
import section6Img3 from "../../assets/images/section-6-img-3.png";
import joinusImg from "../../assets/images/join-us-section.png";
import section8Img1 from "../../assets/images/section-8-img-1.png";
import section8Img2 from "../../assets/images/section-8-img-2.png";
import section8Img3 from "../../assets/images/section-8-img-3.png";

const services = [
  {
    id: 1,
    img: section4Img1,
    title: "Web Development",
    desc: "Welcome Studio gives you all the tools you need to create and host virtual experiences that look awesome and put your brand centerstage.",
  },
  {
    id: 2,
    img: section4Img2,
    title: "App Development",
    desc: "Cut through the yawns, grab your audience’s attention, and turn passive attendees into active participants.",
  },
  {
    id: 3,
    img: section4Img3,
    title: "UI/UX",
    desc: "Track the success of your events with deep insights and analytics measured across the entire attendee experience.",
  },
  {
    id: 4,
    img: section4Img4,
    title: "Chat Bots",
    desc: "Track the success of your events with deep insights and analytics measured across the entire attendee experience.",
  },
  {
    id: 5,
    img: section4Img5,
    title: "Machine Learning Solutions",
    desc: "Track the success of your events with deep insights and analytics measured across the entire attendee experience.",
  },
];

export const WebDevelopment = () => {
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
        <div className="wrapper">
          <div className="grid sm:grid-cols-[60%_40%] gap-5">
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

      <section className="sm:min-h-screen relative md:w-[95vw] overflow-hidden bg-white sm:-mt-[13rem]">
        <div className="wrapper py-14">
          <p className="text-2xl font-medium">An unmatched attendee</p>
          <h2 className="text-[4rem] sm:text-[7rem] md:text-[9rem] lg:text-[10rem] md:leading-[10rem] font-medium">
            Experience
          </h2>
          <div className="mt-2 sm:mt-14">
            <div className="grid sm:grid-cols-5 sm:grid-rows-[15rem_15rem_15rem_15rem] gap-5">
              <div class="sm:col-span-2 sm:row-span-1 p-4 lg:p-14">
                <p>Interactive overlays</p>
                <p className="text-sm text-gray-600">
                  Add custom branded graphics that lay over your live video to
                  intro speakers, emphasize key points, and display clickable
                  CTAs.
                </p>
              </div>
              <div class="sm:col-span-3 sm:row-span-2">
                <img
                  src={section2Img1}
                  class="w-full h-full object-cover"
                  alt="1"
                />
              </div>
              <div class="sm:col-span-2 sm:row-span-3 bg-[#6C666B]">
                <img
                  src={section2Img3}
                  class="w-full h-full object-contain"
                  alt="3"
                />
              </div>
              <div class="sm:col-span-3 sm:row-span-2">
                <img
                  src={section2Img2}
                  class="w-full h-full object-cover"
                  alt="2"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 grid-rows-1 mt-5 gap-5">
              <div class="sm:row-span-1">
                <img
                  src={section2Img4}
                  class="w-full h-full object-cover"
                  alt="4"
                />
              </div>
              <div class="sm:row-span-1">
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
          <p className="text-xl sm:text-2xl font-medium">Powered by</p>
          <div className="flex md:grid gap-2 md:gap-0 grid-cols-3 items-center grid-rows-3 mt-5">
            <h2 className="col-start-1 row-start-1 text-[2rem] sm:text-5xl md:text-[3.5rem] lg:text-[5rem] font-medium">
              VKM
            </h2>
            <h2 className="col-start-2 row-start-2 text-[2rem] sm:text-5xl md:text-[3.5rem] lg:text-[5rem] font-medium">
              Techno
            </h2>
            <h2 className="col-start-3 row-start-3 text-[2rem] sm:text-5xl md:text-[3.5rem] lg:text-[5rem] font-medium">
              Solutions
            </h2>
          </div>
          <div className="flex flex-col md:flex-row sm:justify-between bg-gradient-to-bl from-[#bea1a7] to-[#95b6cc] mt-8 md:mt-16 md:h-[60vh]">
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
          <div className="grid sm:grid-cols-3 gap-4">
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

      <section className="sm:min-h-screen bg-section4 bg-no-repeat bg-cover w-full mt-14">
        <div className="wrapper grid sm:grid-cols-[45%_53%] gap-5 pt-12">
          <h2 className="text-4xl sm:text-5xl leading-tight font-medium">
            Services We <br /> Provide
          </h2>
          <div className="flex flex-col gap-3 items-start">
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
          <div className="grid grid-cols-1">
            {services.map((item) => (
              <div
                className="text-white sm:text-black py-10 border-t border-black/30 flex gap-8 flex-col-reverse sm:grid items-center grid-cols-[40%_55%] sm:gap-5"
                key={item.id}
              >
                <div className="flex flex-col gap-3">
                  <h2 className="font-medium text-2xl sm:text-3xl">{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
                <img
                  src={item.img}
                  className="w-full h-[30vh] sm:h-full object-cover rounded-md sm:rounded-full"
                  alt={item.title}
                />
              </div>
            ))}
          </div>
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
              <div className="flex z-10 flex-col gap-5 justify-center ml-10">
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
          <h2 className="text-5xl sm:text-7xl font-medium text-white lg:text-black">
            Loved & <br /> trusted
          </h2>
          <div className="py-14">
            <Testimonials />
          </div>
        </div>
      </section>

      <section className="wrapper flex flex-col items-center justify-center pb-14 text-center md:py-20 text-white">
        <div className="flex flex-col gap-10 items-center w-full">
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

      <section className="bg-white text-black py-14">
        <div className="wrapper flex flex-col items-center justify-center">
          <h2 className="text-2xl text-center">Recent articles</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-5 mt-8">
            <div className="flex flex-col gap-2">
              <img
                src={section6Img1}
                className="sm:h-[15rem] aspect-video sm:aspect-auto object-cover rounded-se-3xl"
                alt=""
              />
              <p className="p-1 rounded-md border border-black/40 w-fit text-[.7rem]">
                Inspiration
              </p>
              <h5 className="">
                8 Creative Ways to Repurpose Your Webinar Content
              </h5>
              <Link className="text-primary mt-2">Read</Link>
            </div>
            <div className="flex flex-col gap-2">
              <img
                src={section6Img2}
                className="sm:h-[15rem] aspect-video sm:aspect-auto object-cover rounded-se-3xl"
                alt=""
              />
              <p className="p-1 rounded-md border border-black/40 w-fit text-[.7rem]">
                Inspiration
              </p>
              <h5 className="">
                Why Webinars Are the #1 Lead Generation Marketing Strategy, You
                May Not Be Thinking About
              </h5>
              <Link className="text-primary mt-2">Read</Link>
            </div>
            <div className="flex flex-col gap-2">
              <img
                src={section6Img3}
                className="sm:h-[15rem] aspect-video sm:aspect-auto object-cover rounded-se-3xl"
                alt=""
              />
              <p className="p-1 rounded-md border border-black/40 w-fit text-[.7rem]">
                Inspiration
              </p>
              <h5 className="">
                How to Drive Qualified Pipeline and Enable Sales After Your
                Webinar Wraps
              </h5>
              <Link className="text-primary mt-2">Read</Link>
            </div>
          </div>
          <Link className="mt-10 primary-btn w-fit mx-auto">Read the blog</Link>
        </div>
      </section>

      <section className="bg-black pt-14 text-white">
        <div className="wrapper">
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

      <section className="bg-section7 bg-no-repeat bg-center bg-cover text-white">
        <div className="wrapper md:h-[50vh]">
          <div className="h-full flex flex-col md:flex-row justify-between gap-10 py-10">
            <div className="flex flex-col justify-between gap-4">
              <h2 className="text-3xl sm:text-5xl">Signup for the newsletter</h2>
              <p>Stay connected</p>
            </div>
            <form className="sm:self-end flex md:w-1/3 flex-col gap-4">
              <div className="">
                <input
                  required
                  className="w-full bg-transparent outline-none border-b border-white/40"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              <div className="w-full flex items-center">
                <div className="w-full">
                  <input
                    required
                    className="w-full bg-transparent outline-none border-b border-white/40"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <button className="text-2xl -ml-6">
                  <FaArrowRightLong />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white overflow-hidden">
        <div className="wrapper flex flex-col items-center gap-5 text-center">
          <h2 className="text-5xl sm:text-7xl font-medium">
            Experience <br /> Welcome
          </h2>
          <p className="text-sm">
            A webinar platform designed for marketers to host jaw-dropping
            experiences that drive revenue.
          </p>
          <button className="primary-btn">Request a demo</button>

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
