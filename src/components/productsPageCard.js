import React, { useEffect } from "react";

const ProductsPageCard = ({
  title,
  image,
  index,
  currentProduct,
  setCurrentItem,
}) => {
  // useEffect(() => {
  //   return () => {
  //     // setCurrentProduct(productList[0]);
  //     setCurrentItem(null);
  //   };
  // }, []);

  return (
    <>
      <div className="border-[1px] border-[#282828] rounded-[6px] p-[20px]">
        <div className="border-b-[1px] border-[#BABABA] flex items-center justify-center">
          <img
            src={image}
            alt="productImgage"
            className="w-[177px] h-[123px]"
          />
        </div>
        <div className="flex items-center justify-between pt-[31px]">
          <h2 className=" text-[14px] font-[700]">{title}</h2>
          <button
            onClick={() => setCurrentItem(currentProduct.items[index])}
            className="bg-red text-white rounded py-[8px] px-[10px] flex items-center gap-[8px] text-[12px] lg:text-[14px] font-[600] "
          >
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

export default ProductsPageCard;
