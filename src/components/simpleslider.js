import React from "react";
import Slider from "react-slick";

function SimpleSlider({ bannerImage }) {
  const myStyle = {
    backgroundImage: `url(${bannerImage})`,
    height: "100%",
    width: "100%",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
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
        <div className="w-full h-full bg-gradient-to-r from-[#161616] to-[#D9D9D9] mix-blend-overlay">
          <div>
            <img
              src={bannerImage}
              alt="banner_arrowcut"
              quality={100}
              className="w-full h-full object-cover"
              fill={true}
            />
          </div>
          <div className="absolute top-0 h-full w-full flex flex-col items-center">
            <p className="text-[2.635rem] leading-[3.438rem]">
              <span className="text-red font-extrabold">
                Innovation in Every Cut:
              </span>
              <span className="text-white font-bold">
                Your Trusted <br />
                Source for Cutting-Edge Tools
              </span>
            </p>

            <p className="text-white font-normal leading-[1.219rem] py-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod temetfdorpor incididunt ut labore et
            </p>

            <button className="bg-red text-white rounded py-4 px-6">
              Get Started
            </button>
          </div>
        </div>
        <div
          style={{
            backgroundImage:
              "url('https://media.licdn.com/dms/image/D5612AQHMRKuz2h7bug/article-cover_image-shrink_720_1280/0/1693634702903?e=2147483647&v=beta&t=FpPYLDp8Um7RJnpbYJEm_HOvpQzqIgtbXmvcSn-o-XE')",
          }}
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
