import React from "react";
import Slider from "react-slick";
import FeaturedProdCard from "./featuredProdCard";
import carbideDrill from "../assets/featCarbideDrill.png";
import carbideEndMill from "../assets/featCarbideEndMill.png";
import reamers from "../assets/featReamer.png";
import indexableTool from "../assets/featIndexableTool.png";
function FeaturedItems() {
  const featProds = [
    {
      img: carbideDrill,
      title: "Carbide Drill",
      desc: "The carbide drill is short and stubby, with a very short chip groove and excellent rigidity alloy centering drill is more effective.",
    },
    {
      img: carbideEndMill,
      title: "Carbide End Mill",
      desc: "It is specially suitable for cutting high-density and low-hardness materials, such as stainless steel and nickel alloys.",
    },
    {
      img: reamers,
      title: "Reamers",
      desc: "A reamer is a rotary tool with one or more teeth for removing a thin layer of metal from the surface of a machined hole.",
    },
    {
      img: indexableTool,
      title: "Indexable tool",
      desc: "Made of Quality Tool Steel- Machined for a perfect size cavity for carbide insert seat, Hardened & Precisely Ground.",
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
