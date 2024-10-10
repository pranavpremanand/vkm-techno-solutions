import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";
import React, { useState } from "react";
import { Link } from "react-scroll";

const options = [
  {
    name: "Features",
    path: "features",
  },
  {
    name: "Services",
    path: "services",
  },
  {
    name: "Events",
    path: "events",
  },
  {
    name: "Blogs",
    path: "blogs",
  },
  {
    name: "Contact Us",
    path: "contact",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-5 sticky top-0 w-full bg-black z-50 text-white">
      <div className="wrapper flex justify-between items-center gap-4">
        <div className="flex items-center gap-20 w-full">
          <Link smooth={true} to='banner' className="text-xl cursor-pointer sm:text-2xl">VKM Techno Solutions</Link>
          <div className="lg:flex items-center gap-6 hidden">
            {options.map((option) => (
              <Link
                to={`${option.path}`}
                className="link"
                key={option.path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                {option.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:flex items-center gap-4 hidden">
          <Link className='link' to="/">Support</Link>
          <Link className='link' to="/">Login</Link>
          <Link className="primary-btn">Demo</Link>
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
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
          <div className="flex flex-col gap-6">
            {options.map(({ name, path, id }) => (
              <Link
                onClick={() => setIsOpen(false)}
                key={id}
                className="text-3xl text-white font-medium transition-colors duration-300 link"
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                {name}
              </Link>
            ))}
            <Link onClick={() => setIsOpen(false)} className="link text-3xl text-white font-medium transition-colors duration-300" to="/">
              Support
            </Link>
            <Link onClick={() => setIsOpen(false)} className="link text-3xl text-white font-medium transition-colors duration-300" to="/">Login</Link>
          </div>
        </Drawer>
        <div
          className="block lg:hidden justify-self-end"
          onClick={toggleDrawer}
        >
          <Hamburger
            color="white"
            size="23"
            toggled={isOpen}
            rounded
            toggle={setIsOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;