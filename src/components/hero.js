import React from "react";
import bannerImage from "../assets/arrowcut_banner.jpg";
import SimpleSlider from "./simpleslider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  return (
    // <div className="pl-20 flex flex-col items-start justify-evenly h-[34.375rem] bg-gradient-to-r from-[#161616] via-[#171717] via-[#202020]  to-[#D9D9D9]">
    //   <img
    //     src={bannerImage}
    //     alt="banner_arrowcut"
    //     quality={100}
    //     className="w-full h-full object-cover"
    //     fill={true}
    //   />
    //   <p className="text-[2.635rem] leading-[3.438rem]">
    //     <span className="text-red font-extrabold">
    //       Innovation in Every Cut:
    //     </span>{" "}
    //     <span className="text-white font-bold">
    //       Your Trusted <br />
    //       Source for Cutting-Edge Tools
    //     </span>
    //   </p>
    //   <p className="text-white font-normal leading-[1.219rem]">
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    //     temetfdorpor incididunt ut labore et
    //   </p>
    //   <button className="bg-red text-white rounded py-4 px-6">
    //     Get Started
    //   </button>
    // </div>
    // <div className="w-full overflow-hidden">
    <SimpleSlider bannerImage={bannerImage} />
    // </div>
  );
};

export default Hero;
