import React from "react";
import section4Img1 from "../../assets/images/section-4-img-1.png";
import section4Img2 from "../../assets/images/section-4-img-2.png";
import section4Img3 from "../../assets/images/section-4-img-3.png";
import section4Img4 from "../../assets/images/section-4-img-4.png";
import section4Img5 from "../../assets/images/section-4-img-5.png";

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
const Services = () => {
  return (
    <div className="grid grid-cols-1">
      {services.map((item) => (
        <div
          className="text-white sm:text-black py-10 border-t border-black/30 flex gap-8 flex-col-reverse sm:grid items-center grid-cols-[40%_55%] sm:gap-5"
          key={item.id}
        >
          <div data-aos="fade-right" className="flex flex-col gap-3">
            <h2 className="font-medium text-2xl sm:text-3xl">{item.title}</h2>
            <p>{item.desc}</p>
          </div>
          <img
            data-aos="fade-left"
            src={item.img}
            className="w-full h-[30vh] sm:h-full object-cover rounded-md sm:rounded-full"
            alt={item.title}
          />
        </div>
      ))}
    </div>
  );
};

export default Services;
