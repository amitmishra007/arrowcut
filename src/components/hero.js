import React from "react";
import bannerImage from "../assets/arrowcut_banner.jpg";
import SimpleSlider from "./simpleslider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  return <SimpleSlider bannerImage={bannerImage} />;
};

export default Hero;
