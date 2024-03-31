import React from "react";
import Slider from "react-slick";

function SimpleSlider({ bannerImage }) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="w-full h-full bg-gradient-to-r from-[#161616] to-[#D9D9D9] mix-blend-overlay relative">
          <div>
            <img
              src={bannerImage}
              alt="banner_arrowcut"
              quality={100}
              className="w-full h-full object-cover"
              fill={true.toString()}
            />
          </div>
          <div className="absolute top-[6%] md:top-[15%] lg:top-[30%] left-[20%] md:left-[15%] lg:left-[10%] w-full transform -translate-x-10 -translate-y-30">
            <p className="text-[1rem] md:text-[1.8rem] lg:text-[2.635rem] lg:leading-[3.438rem]">
              <span className="text-red font-extrabold">
                Innovation in Every Cut:
              </span>
              <span className="text-white font-bold">
                &nbsp; Your Trusted <br />
                Source for Cutting-Edge Tools
              </span>
            </p>

            <p className="text-white text-[8px] md:text-[14px] lg:text-[16px] font-[400] lg:leading-[1.219rem] pt-[8px] lg:pt-[16px] pb-[16px] lg:pb-[32px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod temetfdorpor
              <br /> incididunt ut labore et
            </p>

            <button className="bg-red text-white rounded py-1 md:py-2 lg:py-4 px-2 md:px-4 lg:px-6 lg:text-[20px] font-[600]">
              Get Started
            </button>
          </div>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
