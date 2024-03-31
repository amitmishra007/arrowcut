import React from "react";
import arrowRight from "../assets/arrowRight.svg";

const FeaturedProdCard = ({ imgs, title, desc }) => {
  return (
    <div className="w-[16.813rem] h-[23.5rem] bg-[#282828] flex flex-col items-center justify-between rounded-md p-6 snap-center">
      <img
        className="w-[10.188rem] h-[7.75rem]"
        src={imgs}
        alt="featured_productt_img"
      />
      <p className="font-bold leading-[1.875rem] text-white">{title}</p>
      <p className="font-normal text-sm text-white leading-[1.067rem]">
        {desc}
      </p>
      <button className="bg-red w-full flex items-center justify-between py-[0.625rem] mt-2 rounded">
        <span className="pl-4 text-sm text-white font-semibold leading-6">
          Explore
        </span>
        <img
          src={arrowRight}
          alt={`${title}_alt_img`}
          className="pr-2"
        />
      </button>
    </div>
  );
};

export default FeaturedProdCard;
