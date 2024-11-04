import React from "react";
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { Link } from "react-scroll";
import { logoImg } from "../constant";

const Footer = () => {
  return (
    <div className="py-14 bg-gradient-to-r from-primary/30 to-secondary/30">
      <div className="wrapper text-white">
        <div className="flex md:flex-row flex-col justify-between gap-10">
          <div className="flex flex-col items-center">
            <img src={logoImg} className="h-[6rem]" alt="" />
            <p className="desc md:max-w-[15rem] text-sm text-center">
              We have rapidly grown into a trusted partner for organizations
              seeking digital transformation, enhanced operational efficiency.
            </p>
          </div>
          <div className="flex md:flex-row flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h6 className="font-medium mb-1">Quick Links</h6>
              <Link smooth to='banner' offset={-60} className="text-white/70 desc text-sm cursor-pointer">Home</Link>
              <Link smooth to='about' offset={-60} className="text-white/70 desc text-sm cursor-pointer">About Us</Link>
              <Link smooth to='services' offset={-60} className="text-white/70 desc text-sm cursor-pointer">Services</Link>
              {/* <Link to='faqs' offset={-60} className="text-white/70 desc text-sm">FAQs</Link> */}
              <Link smooth to='contact' offset={-60} className="text-white/70 desc text-sm cursor-pointer">Contact Us</Link>
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="font-medium mb-1">Contact Us</h6>
              <div className="flex flex-col">
                <h6 className="text-[.9rem] mb-1">Phone</h6>
                <Link className="text-white/70 desc text-sm">
                  +91-9715265678
                </Link>
              </div>
              <div className="flex flex-col mt-2">
                <h6 className="text-[.9rem] mb-1">Office Address</h6>
                <p className="text-white/70 desc text-sm max-w-[15rem]">
                  S F NO 395/1B1A1, LR Nagar, V Kota Road, Pernambut, 635810,
                  Vellore District, Tamil Nadu
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 mt-7 border-t text-gray-500 border-white/40 w-full">
          <div className="flex justify-center gap-5 w-full">
            <div className="flex gap-5 items-center mt-5">
              <Link>
                <BsFacebook className="text-xl text-gray-500" />
              </Link>
              <Link>
                <BsTwitter className="text-xl text-gray-500" />
              </Link>
              <Link>
                <BsLinkedin className="text-xl text-gray-500" />
              </Link>
              <Link>
                <BsYoutube className="text-xl text-gray-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
