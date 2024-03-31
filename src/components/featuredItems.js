import React from "react";
import Slider from "react-slick";
import FeaturedProdCard from "./featuredProdCard";
import productImg from "../assets/indexableTool.png";
function FeaturedItems() {
  const featProds = [
    {
      img: productImg,
      title: "Indexable tool",
      desc: "Lorem ipsum dolor sit amtyvet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore dxcxdmagna aliqua. Ut enfdx buim ad minim",
    },
    {
      img: productImg,
      title: "Indexable tool",
      desc: "Lorem ipsum dolor sit amtyvet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore dxcxdmagna aliqua. Ut enfdx buim ad minim",
    },
    {
      img: productImg,
      title: "Indexable tool",
      desc: "Lorem ipsum dolor sit amtyvet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore dxcxdmagna aliqua. Ut enfdx buim ad minim",
    },
    {
      img: productImg,
      title: "Indexable tool",
      desc: "Lorem ipsum dolor sit amtyvet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore dxcxdmagna aliqua. Ut enfdx buim ad minim",
    },
  ];
  const multisettings = {
    dots: false,
    variableWidth: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          arrows: false,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          //   centerMode: true,
        },
      },
    ],
  };
  return (
    <div className="mx-auto w-full flex items-center justify-center lg:w-[1152px] px-0 md:px-0 lg:px-0 xl:px-0">
      <div className="slider-container w-full flex items-center justify-center">
        <Slider
          {...multisettings}
          className="w-full flex items-center justify-center"
        >
          {featProds.map((prod, i) => (
            <FeaturedProdCard
              key={`${prod.title}_card_${i}`}
              imgs={prod.img}
              title={prod.title}
              desc={prod.desc}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default FeaturedItems;
