import React from "react";
import { useKeenSlider } from "keen-slider/react";
import profileImg1 from "../../../assets/images/profileimg-1.png";
import profileImg2 from "../../../assets/images/profileimg-2.png";
import profileImg3 from "../../../assets/images/profileimg-3.png";
import brand1 from "../../../assets/images/bitwise.png";
import brand2 from "../../../assets/images/dribble.png";
import brand3 from "../../../assets/images/salesforce.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    img: brand1,
    profileImg: profileImg1,
    name: "Ally Masi",
    role: "Director of Industries Events Marketing Salesforce",
    desc: '"We chose Welcome because it’s intuitive, beautifully designed, and made for attendee interaction, making it the perfect way to uplevel our experiences. The Slack-like chat, on-stage Q&A, and polling has increased audience engagement."',
  },
  {
    id: 2,
    img: brand2,
    profileImg: profileImg2,
    name: "Talisha Brantley",
    role: "VP of Events Bitwise",
    desc: "“Before Welcome, I had to get a switcher, use Ecamm, OBS and always needed this or that to make it all work. Now, one or two people can run our virtual events easily without any special equipment. With just one platform, we can do everything we want.”",
  },
  {
    id: 3,
    img: brand3,
    profileImg: profileImg3,
    name: "Jessica",
    role: "CEO of Industries Events Marketing Salesforce",
    desc: '"The Welcome experience has been 10 out of 10. When our sponsors like Facebook are considering sponsoring our events, Welcome is our "secret weapon"',
  },
];

const Testimonials = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView:3,
        spacing: 20,
      },
      breakpoints: {
        "(max-width: 1024px)": {
          slides: {
            perView: 1,
            spacing: 20,
          },
        },
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  // Button click handler
  const handleNextClick = () => {
    if (instanceRef.current) {
      instanceRef.current.next(); // Move to the next slide
    }
  };

  const handlePrevClick = () => {
    if (instanceRef.current) {
      instanceRef.current.prev(); // Move to the prev slide
    }
  };
  return (
    <div className="w-full mt-5">
      <div ref={sliderRef} className="keen-slider">
        {reviews.map((item) => (
          <div
            key={item.id}
            className="keen-slider__slide min-h-[18rem] justify-between text-white p-5 border border-white rounded-ss-3xl rounded-br-3xl flex flex-col gap-4"
          >
            <p>{item.desc}</p>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <img
                  src={item.profileImg}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex flex-col gap-2">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm">{item.role}</p>
                </div>
              </div>
              <img
                src={item.img}
                className="w-[4rem] object-contain"
                alt={item.role}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-10 mt-10">
        <button
          className="bg-white text-black px-4 py-2"
          onClick={handlePrevClick}
          aria-label="Previous slide"
        >
          <FaArrowLeft className="text-2xl" />
        </button>
        <button
          className="bg-white text-black px-4 py-2"
          onClick={handleNextClick}
          aria-label="Next slide"
        >
          <FaArrowRight className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
