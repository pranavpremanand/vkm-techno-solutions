import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-[5rem] text-white bg-gradient-to-r from-secondary/50 to-primary/50"
    >
      <div data-aos="fade-right" className="wrapper">
        <div className="h-full grid md:grid-cols-2 gap-10 py-10">
          <div className="flex flex-col gap-4">
            <h2 className="heading-2">
              Get In Touch With Us!
            </h2>
            <p className="desc">
              Let <span className="font-semibold">VKM Techno Solutions</span> be
              the catalyst for your digital transformation. Together, we can
              build solutions that are as dynamic as your vision, helping your
              business reach new heights.
            </p>
          </div>
          <form className="flex flex-col gap-4 md:px-[1rem]">
            <div className="">
              <input
                required
                className="w-full bg-transparent outline-none border rounded-sm font-light border-white/40 px-2 py-1"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div className="">
              <input
                required
                className="w-full bg-transparent outline-none border rounded-sm font-light border-white/40 px-2 py-1"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="">
              <textarea
                className="w-full bg-transparent outline-none border rounded-sm font-light border-white/40 px-2 py-1"
                rows='4'
                placeholder="Message"
                required
              />
            </div>
            <button
              className="primary-btn"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
