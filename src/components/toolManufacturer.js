import React from "react";
import toolManufImg from "../assets/toolManufMainImg.png";
import line from "../assets/line.png";
import stars from "../assets/experienceStars.svg";

const ToolManufacturer = () => {
  return (
    <div className="w-full flex items-center justify-center pt-20 pb-24">
      {" "}
      <div className="relative w-[72rem] h-[36.25rem] text-dimgray">
        <b className="absolute top-[0rem] left-[calc(50%_-_575px)] text-[2.125rem] leading-[2.813rem] inline-block w-[25.688rem] h-[5.625rem] text-gray-200">
          <span>{`Asia's Premier Cutting `}</span>
          <span className="text-red">Tools Manufacturer</span>
        </b>
        <div className="absolute top-[7.063rem] left-[calc(50%_+_124px)] inline-block w-[28.25rem] h-[5.5rem]">
          <p className="m-0 whitespace-pre-wrap">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad
            minim veniam, quis nostrud exercitation ullamco lbris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nla
          </p>
          <p className="m-0">&nbsp;</p>
        </div>
        <div className="absolute top-[13.813rem] left-[calc(50%_+_124px)] inline-block w-[28.25rem] h-[2.438rem]">
          <p className="m-0 whitespace-pre-wrap">
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nul
          </p>
          <p className="m-0">&nbsp;</p>
        </div>
        <img
          className="absolute top-[7.063rem] left-[calc(50%_-_576px)] rounded-md w-[42.5rem] h-[23.75rem] object-cover"
          alt=""
          src={toolManufImg}
        />
        <div className="absolute top-[20.75rem] left-[calc(50%_-_11px)] rounded-md bg-[#282828] w-[36.688rem] h-[15.5rem] overflow-hidden text-[2.5rem] text-white">
          <div className="absolute top-[4.313rem] left-[4.625rem] w-[11.063rem] h-[6.125rem]">
            <div className="absolute top-[0rem] left-[4.375rem] font-extrabold">
              5+
            </div>
            <div className="absolute top-[4.75rem] left-[0rem] text-[1.125rem] font-medium">
              Years of experience
            </div>
          </div>
          <div className="absolute top-[4.313rem] left-[25.25rem] w-[6.813rem] h-[6.125rem]">
            <div className="absolute top-[0rem] left-[0.813rem] font-extrabold">
              100+
            </div>
            <div className="absolute top-[4.75rem] left-[0rem] text-[1.125rem] font-medium">
              Best Clients
            </div>
          </div>
          <img
            className="absolute top-[2.625rem] left-[calc(50%_+_15.5px)] w-[0rem] h-[10.188rem] object-contain"
            alt=""
            src={line}
          />
          <img
            className="absolute top-[10.938rem] left-[6.563rem] w-[7.25rem] h-[1.25rem]"
            alt=""
            src={stars}
          />
        </div>
      </div>
    </div>
  );
};

export default ToolManufacturer;
