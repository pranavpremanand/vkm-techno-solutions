import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const TrustWorthyBox = () => {
  const totalYrs = 3;
  const totalOnTimeCompletionPercentage = 100;
  const totalExperts = 10;
  const totalClients = 50;

  const [yrs, setYrs] = useState(0);
  const [onTimeCompletion, setOnTimeCompletion] = useState(0);
  const [experts, setExperts] = useState(0);
  const [clients, setClients] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      // Animate Years of Experience
      const yrsInterval = setInterval(() => {
        setYrs((prev) => Math.min(prev + 1, totalYrs));
      }, 100);

      // Animate Experts
      const expertsInterval = setInterval(() => {
        setExperts((prev) => Math.min(prev + 1, totalExperts));
      }, 100);

      // Animate Clients
      const clientsInterval = setInterval(() => {
        setClients((prev) => Math.min(prev + 1, totalClients));
      }, 50);

      // Animate On Time Completion Percentage
      const completionInterval = setInterval(() => {
        setOnTimeCompletion((prev) =>
          Math.min(prev + 1, totalOnTimeCompletionPercentage)
        );
      }, 20);

      // Clear intervals when animation reaches target values
      return () => {
        clearInterval(yrsInterval);
        clearInterval(expertsInterval);
        clearInterval(clientsInterval);
        clearInterval(completionInterval);
      };
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 lg:gap-5 rounded-3xl bg-gradient-to-r from-secondary to-primary p-[2rem]"
    >
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex flex-col gap-3 relative w-fit">
          <h1 className="heading-1">{yrs}</h1>
          <span className="absolute top-1 -right-3 text-lg">+</span>
        </div>
        <p className="font-medium mt-3">Years of Experience</p>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex flex-col gap-3 relative w-fit">
          <h1 className="heading-1">{experts}</h1>
          <span className="absolute top-1 -right-3 text-lg">+</span>
        </div>
        <p className="font-medium mt-3">Expert Team</p>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex flex-col gap-3 relative w-fit">
          <h1 className="heading-1">{clients}</h1>
          <span className="absolute top-1 -right-3 text-lg">+</span>
        </div>
        <p className="font-medium mt-3">Clients</p>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex flex-col gap-3 relative w-fit">
          <h1 className="heading-1">{onTimeCompletion}</h1>
          <span className="absolute top-1 -right-3 text-lg">%</span>
        </div>
        <p className="font-medium mt-3">On Time Completion</p>
      </div>
    </div>
  );
};

export default TrustWorthyBox;
