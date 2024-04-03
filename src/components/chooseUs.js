import React from "react";
import chooseUsImg from "../assets/chooseUsImg.png";
import checkCircle from "../assets/CheckCircle.png";
import arrowRight from "../assets/arrowRightBlack.svg";

const checks = [
  "Heat-resistant Coating",
  "High quality raw material",
  "Polished surface treatment",
  "Extensive Experience",
  "Bronze Coating",
];

const ChooseUs = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${chooseUsImg})`,
        backgroundRepeat: "no-repeat",
      }}
      className="w-full lg:h-[31.625rem] flex flex-col lg:flex-row items-center justify-center bg-[#282828]"
    >
      <div className="mt-[35rem] md:mt-[30rem] lg:mt-[1rem] w-11/12 md:w-[31.688rem] md:h-[21.625rem] pl-10 pt-6 pr-20 bg-red flex flex-col rounded-md">
        <p className="text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] font-bold text-white leading-[3.438rem]">
          Why Choose us?
        </p>
        <p className="md:pt-4 text-xs md:text-sm text-white font-extralight md:font-normal leading-[17.07px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elfv it, sed do
          eiusmod terwrmpor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, qxxscsgbne ffuis nostrud exercitation ullamco laboris
          nisi ut aliquip exkeea commodo consequat. Duis aute irure jbvywut
          hvdolor in
        </p>
        <button className="mb-4 bg-white w-[5.789rem] md:w-[8.7rem] flex items-center justify-between py-[0.3rem] md:py-[0.625rem] mt-16 rounded">
          <span className=" pl-2 md:pl-4 text-[12px] md:text-sm text-[#282828] font-semibold leading-6">
            Explore
          </span>
          <img
            src={arrowRight}
            alt="arrowRightBlackAltImg"
            className="pr-2"
          />
        </button>
      </div>
      <div className="  lg:h-[21.625rem] md:w-[31.688rem] flex flex-col justify-evenly md:items-start md:justify-between lg:ml-16 py-20 lg:py-[0px] gap-3 md:gap-auto">
        {checks.map((item, i) => {
          return (
            <div
              className="flex items-center"
              key={`${i}_${item}`}
            >
              <div className="bg-red w-[2rem] h-[2rem] md:w-[3.125rem] md:h-[3.125rem] rounded-md flex items-center justify-center ">
                <img
                  src={checkCircle}
                  alt="checkCircle"
                  className="w-1/2 md:w-auto h-1/2"
                />
              </div>
              <span className=" pl-[0.5rem] md:pl-[1rem] text-white font-semibold text-base md:text-xl leading-[24.38px]">
                {item}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseUs;
