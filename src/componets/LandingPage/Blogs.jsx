import React from 'react'
import section6Img1 from "../../assets/images/section-6-img-1.png";
import section6Img2 from "../../assets/images/section-6-img-2.png";
import section6Img3 from "../../assets/images/section-6-img-3.png";
import { Link } from 'react-router-dom';

const Blogs = () => {
  return (
    <section id="blogs" className="bg-white text-black py-14">
    <div
      data-aos="fade-up"
      className="wrapper flex flex-col items-center justify-center"
    >
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
  )
}

export default Blogs