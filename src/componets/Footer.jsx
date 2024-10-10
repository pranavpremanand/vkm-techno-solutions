import React from "react";
import { BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-14">
      <div className="wrapper text-white">
        <div className="flex flex-col gap-2 items-center text-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
            <div className="flex flex-col gap-3">
              <h5 className="text-white/70">Product</h5>
              <ul className="flex flex-col gap-2 text-sm">
                <Link className="link">Features</Link>
                <Link className="link">Pricing</Link>
                <Link className="link">Book a demo</Link>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="text-white/70">Explore</h5>
              <ul className="flex flex-col gap-2 text-sm">
                <Link className="link">Events</Link>
                <Link className="link">Blogs</Link>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="text-white/70">Company</h5>
              <ul className="flex flex-col gap-2 text-sm">
                <Link className="link">About Us</Link>
                <Link className="link">Contact Us</Link>
              </ul>
            </div>
          </div>
          <div className="mt-5 text-white/70 mb-4">
            Location:
            <span className="text-sm text-white">
              {" "}
              S F NO 395/1B1A1,LR NAGAR VKOTA ROAD,PERNAMBUT, 635810. Vellore
              District. TamilNadu
            </span>
          </div>
          <div className="pt-10 border-t text-gray-500 border-white/40 w-full">
            <div className="flex sm:flex-row flex-col justify-between items-center gap-5 w-full">
              <div className="flex gap-5 text-sm">
                <Link>Privacy Policy</Link>
                <Link>Terms of Service</Link>
              </div>
              <div className="flex gap-5 items-center">
                <Link>
                  <BsYoutube className="text-xl text-gray-500"/>
                </Link>
                <Link>
                  <BsTwitter className="text-xl text-gray-500"/>
                </Link>
                <Link>
                  <BsLinkedin className="text-xl text-gray-500"/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
