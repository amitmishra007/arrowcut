import React from "react";

const ProductCard = ({ title, image, index }) => {
  return (
    <>
      <div className="border-[1px] border-[#282828] rounded-[6px] p-[20px]">
        <div className="border-b-[1px] border-[#BABABA] flex items-center justify-center">
          <img
            src={image}
            alt="productImgage"
          />
        </div>
        <div className="flex items-center justify-between pt-[31px]">
          <h2 className=" text-[14px] lg:text-[20px] font-[700]">{title}</h2>
          <button className="bg-red text-white rounded py-[8px] px-[10px] flex items-center gap-[8px] text-[12px] lg:text-[14px] font-[600] ">
            Explore
            <span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 9H14.25"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 3.75L14.25 9L9 14.25"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
