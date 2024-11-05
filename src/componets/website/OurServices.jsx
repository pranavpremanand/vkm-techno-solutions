import React, { useState } from "react";
import { allServices } from "../../constant";
import { PiCaretDoubleRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import Drawer from "react-modern-drawer";
import { IoMdClose } from "react-icons/io";

const OurServices = ({ length }) => {
  const [isOpen, setIsOpen] = useState(false);
  const services = allServices.slice(0, length || allServices.length);
  console.log({ allServices, PiCaretDoubleRightBold, Link, Drawer, IoMdClose });
  return (
    <div className="py-[5rem] bg-[#101010] text-white">
      <div className="wrapper flex flex-col text-center gap-5 items-center">
        <div data-aos="fade-up" className="gradient-rounded-text-box mb-2">
          Our Services
        </div>
        <h2 data-aos="fade-up" className="heading-2 max-w-[50rem]">
          Advanced and Highly Reliable Performance
        </h2>
        <p data-aos="fade-up" className="desc max-w-[50rem]">
          Our success is our success and together we help our society to become
          a better place to live and work.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-3">
          {services.map((service) => (
            <div
              data-aos="fade-up"
              key={service.id}
              className="rounded-lg p-[1px] bg-gradient-to-r from-secondary to-primary"
            >
              <div className="rounded-lg bg-[#101010] p-5 flex flex-col justify-between items-start text-start h-full gap-4">
                <div className="flex flex-col gap-3">
                  <h5 className="font-semibold text-xl font-raleway">
                    {service.title}
                  </h5>
                  <p className="desc">{service.desc}</p>
                </div>
                <button onClick={() => setIsOpen(true)} className="desc mt-1 flex items-center gap-3 hover:text-primary transition-all duration-300">
                  Learn More <PiCaretDoubleRightBold />
                </button>
              </div>
            </div>
          ))}
        </div>
        {length && <Link to="/services" data-aos="fade-up" className="primary-btn mt-6">All Services</Link>}
      </div>
      
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="right"
        className="py-4 px-10 z-10"
      >
        <div className="mb-6 flex items-center justify-end pr-[.7rem] py-[.4rem]">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-[2.2rem]"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="flex flex-col gap-6"></div>
      </Drawer>
    </div>
  );
};

export default OurServices;
