import React from "react";
import FeaturedItems from "./featuredItems";

const FeaturedProducts = () => {
  return (
    <div className="flex flex-col items-center pt-[80px] pb-[80px]">
      <div className="text-center">
        <p className="font-bold text-[2rem] lg:text-[2.635rem] pb-10">
          <span>Our Featured </span>
          <span className="text-red">Products</span>
        </p>
      </div>
      <FeaturedItems />
    </div>
  );
};

export default FeaturedProducts;
