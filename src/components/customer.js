import React from "react";
import globeImg from "../assets/globesvg.svg";
import hundredImg from "../assets/100img.png";
import starsImg from "../assets/startsImg.svg";
import leeJongSuk from "../assets/leejongSuk.png";

const Customer = () => {
  return (
    <div className="relative bg-whitesmoke w-[89.875rem] h-[28.125rem] overflow-hidden text-center text-[2.125rem] text-gray-200">
      <b className="absolute top-[13.438rem] left-[calc(50%_-_580px)] leading-[2.5rem] inline-block w-[24.313rem] h-[6.813rem]">
        <span>{`Millions of Customers `}</span>
        <span className="text-red">Like Our Services</span>
      </b>
      <img
        className="absolute top-[7rem] left-[15.081rem] w-[11.519rem] h-[4.938rem] object-cover"
        alt=""
        src={hundredImg}
      />
      <img
        className="absolute h-[57.73%] w-[44.85%] top-[63.78%] right-[54.38%] bottom-[-21.51%] left-[0.76%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={globeImg}
      />
      <div className="absolute top-[5.938rem] left-[42.25rem] rounded-md bg-white shadow-[0px_2px_20px_rgba(0,_0,_0,_0.08)] w-[38.688rem] h-[18rem] overflow-hidden text-left text-[0.875rem] text-dimgray">
        <div className="absolute top-[7.938rem] left-[calc(50%_-_248.5px)] tracking-[0.05em] leading-[170%] inline-block w-[32.125rem] h-[4.813rem]">
          <p className="m-0 text-center">
            "I've been using Arrow-Cut end mills and drills for a few months now
            and I'm incredibly impressed. The quality is exceptional - these
            tools are incredibly durable and precise. They've significantly
            improved our production efficiency and reduced tool breakage.
          </p>
          <p className="m-0">&nbsp;</p>
        </div>
        <img
          className="absolute top-[16rem] left-[16.688rem] w-[5.313rem] h-[0.919rem]"
          alt="stars_img"
          src={starsImg}
        />
        <img
          className="absolute top-[1.688rem] left-[calc(50%_-_24.5px)] rounded-[50%] w-[3.125rem] h-[3.125rem] object-cover"
          alt="lee_jong_suk_img"
          src={leeJongSuk}
        />
        <b className="absolute top-[5.688rem] left-[calc(50%_-_53.5px)] text-[1.125rem] text-gray-200">
          Lee Jong Suk
        </b>
      </div>
      <div className="absolute top-[24.75rem] left-[58.65rem] w-auto h-[2.6rem] flex">
        <button>
          <img
            className=" w-[3rem] h-[2.5rem]"
            alt="arrow-left-circle"
            src="/img/arrow-left-circle.svg"
          />
        </button>
        <button>
          <img
            className=" w-[3rem] h-[2.5rem]"
            alt="arrow-right-circle"
            src="/img/arrow-right-circle.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default Customer;
