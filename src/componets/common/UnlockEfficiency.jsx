import React from "react";
import { Link } from "react-router-dom";

const UnlockEfficiency = () => {
  return (
    <section className="pt-[10rem] pb-[5rem] text-white bg-gradient-to-r from-primary/30 to-secondary/30">
      <div data-aos="fade-up" className="wrapper flex flex-col text-white items-center gap-5 text-center">
        <div className="gradient-rounded-text-box">Unlock Efficiency</div>
        <h2 className="heading-2">Drive Innovation with Our IT Services</h2>
        <p className="desc max-w-[40rem] text-center">
          Empowering businesses to not just survive but to thrive and grow in
          the fast-paced, competitive digital landscape.
        </p>
        <Link className="primary-btn mt-3">Contact Us</Link>
      </div>
    </section>
  );
};

export default UnlockEfficiency;