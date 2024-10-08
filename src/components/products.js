import React from "react";
import ProductCard from "./productCard";

const Products = ({ loc }) => {
  const productList = [
    {
      title: "Carbide drill",
      image: "/img/carbidedrillImg.png",
    },
    {
      title: "Carbide End Mill",
      image: "/img/carbideEndMIllImg.png",
    },
    {
      title: "Carbide Reamer",
      image: "/img/carbideReamerImg.png",
    },
    {
      title: "Cutomized tool",
      image: "/img/customizedTool.png",
    },
    {
      title: "Flat End Mill",
      image: "/img/carbide-flat-end-mill.png",
    },
    {
      title: "Indexable tool",
      image: "/img/indexableTool.png",
    },
  ];
  return (
    <div className="flex flex-col items-center pt-[80px] pb-[80px] px-2">
      <div className="text-center lg:text-left">
        {loc?.pathname !== "/products" && (
          <p className="font-bold text-[2rem]  lg:text-[2.635rem]">
            <span>Explore Our Best </span>
            <span className="text-red">Product Categories</span>
          </p>
        )}
        {loc?.pathname === "/products" && (
          <p className="font-bold text-[2rem]  lg:text-[2.635rem] font-[#282828]">
            <span>Explore Other Items </span>
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]	max-w-[1152px] w-full mx-auto mt-[48px]">
        {productList.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
