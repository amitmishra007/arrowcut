import React from "react";
import Slider from "react-slick";

function SimpleSlider({ bannerImage }) {
  // const myStyle = {
  //   backgroundImage: `url(${bannerImage})`,
  //   height: "100%",
  //   width: "100%",
  //   marginTop: "-70px",
  //   fontSize: "50px",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  // };
  const settings = {
    // dots: true,
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
              fill={true}
            />
          </div>
          <div className="absolute top-[30%] left-[10%] w-full transform -translate-x-10 -translate-y-30">
            <p className="text-[2.635rem] leading-[3.438rem]">
              <span className="text-red font-extrabold">
                Innovation in Every Cut:
              </span>
              <span className="text-white font-bold">
              &nbsp;
                  Your Trusted <br />
                Source for Cutting-Edge Tools
              </span>
            </p>

            <p className="text-white text-[16px] font-[400] leading-[1.219rem] pt-[16px] pb-[32px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod temetfdorpor incididunt ut labore et
            </p>

            <button className="bg-red text-white rounded py-4 px-6 text-[20px] font-[600]">
              Get Started
            </button>
          </div>
        </div>
        <div

        >
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
