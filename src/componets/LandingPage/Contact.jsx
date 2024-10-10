import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Contact = () => {
  return (
    <section
        id="contact"
        className="bg-section7 bg-no-repeat bg-center bg-cover text-white"
      >
        <div data-aos="fade-right" className="wrapper md:h-[50vh]">
          <div className="h-full flex flex-col md:flex-row justify-between gap-10 py-10">
            <div className="flex flex-col justify-between gap-4">
              <h2 className="text-3xl sm:text-5xl">
                Signup for the newsletter
              </h2>
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
  )
}

export default Contact