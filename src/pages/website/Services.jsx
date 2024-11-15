import React from "react";
import OurServices from "../../components/website/OurServices";
import UnlockEfficiency from "../../components/common/UnlockEfficiency";
import Testimonials from "../../components/common/Testimonials";
import Banner from "../../components/website/Banner";

const Services = () => {
  return (
    <>
      <Banner page="Services" />
      <OurServices />
      <UnlockEfficiency />
      <Testimonials />
    </>
  );
};

export default Services;
