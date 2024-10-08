import React from "react";
import contactBanner from "../assets/letsworktogeather.jpg";
import mailUsImg from "../assets/contact_img.svg";
import callUsImg from "../assets/mail_us_img.svg";

const ContactInfo = () => {
  return (
    <div className="py-10 lg:py-10 xl:py-16 min-h-[28.125rem] md:h-[28.125rem] lg:h-[28.125rem] xl:h-[38.125rem] w-full flex items-center justify-center">
      <div className="relative w-full h-full lg-h-auto md:w-4/5 lg:w-4/5 ">
        <img
          className="w-full h-full lg:h-auto rounded"
          src={contactBanner}
          alt="lets_work_togeather"
        />
        <div className="absolute top-[15%] md:top-[4%] lg:top-[10%] xl:top-[-15%] w-full h-[30vh] lg:h-full flex flex-col items-center justify-center bg-gradient-to-b from-black via-black to-lwhite">
          <div className="flex flex-col items-center">
            <p className="pt-8 text-[2rem] lg:text-[2.375rem] font-bold">
              <span className="text-white">Let’s Work </span>
              <span className="text-red">Together</span>
            </p>
            <p className="text-white font-medium lg:text-[1.25rem]/40px pb-8">
              Connect with us today!
            </p>
          </div>
          <div className="flex flex-col lg:flex-row w-9/12 items-center justify-between ">
            <div className="bg-white w-full lg:w-auto flex justify-between items-center rounded max-h-[6.938rem] max-w-[26rem] py-[1rem] lg:py-[2.125rem] px-[1rem] lg:px-[2.125rem] ">
              <div className="flex items-center">
                <img
                  src={mailUsImg}
                  alt="mail_us_img"
                  className="aspect-[3/3] w-12 lg:w-auto"
                />
                <span className="font-bold font-poppins text-[14px] md:text-base lg:text-[22px] pl-[0.625rem] pr-[1.25rem]">
                  Mail Us
                </span>
              </div>
              <span className="text-sm">Info@arrow-cut.com</span>
            </div>
            <div className="bg-white w-full lg:w-auto mt-[1rem] lg:mt-auto flex justify-between items-center rounded max-h-[6.938rem] max-w-[26rem] py-[1rem] lg:py-[2.125rem] px-[1rem] lg:px-[2.125rem]">
              <div className="flex items-center">
                <img
                  src={callUsImg}
                  alt="contact_img"
                  className="aspect-[3/3] w-12 lg:w-auto"
                />
                <span className="font-bold font-poppins text-[14px] md:text-base lg:text-[22px] pl-[0.625rem] pr-[2.25rem]">
                  Call Us
                </span>
              </div>
              <span className="text-sm">+001 6547 6589</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
