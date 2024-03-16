import React from "react";
import contactBanner from "../assets/letsworktogeather.jpg";
import contactImg from "../assets/contact_img.svg";
import mailUsImg from "../assets/mail_us_img.svg";

const ContactInfo = () => {
  return (
    <div className="h-[28.125rem] w-full flex items-center justify-center">
      <div className="relative">
        <img
          className="w-full h-auto rounded"
          src={contactBanner}
          alt="lets_work_togeather"
        />
        <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-black via-black to-lwhite">
          <div className="flex flex-col items-center">
            <p className="text-[2.375rem] font-bold">
              <span className="text-white">Let’s Work </span>
              <span className="text-red">Together</span>
            </p>
            <p className="text-white font-medium text-[1.25rem]/40px pb-8">
              Connect with us today!
            </p>
          </div>
          <div className="flex w-9/12 items-center justify-between ">
            <div className="bg-white flex justify-center items-center rounded max-h-[5.188rem] max-w-[26rem] py-[1.25rem] px-[2.125rem]">
              <img
                src={contactImg}
                alt="mail_us_img"
              />
              <span className="font-bold font-poppins text-[22px] pl-[0.625rem] pr-[2.25rem]">
                Mail Us
              </span>
              <span>saasup@gmail.co</span>
            </div>
            <div className="bg-white flex justify-center items-center rounded max-h-[5.188rem] max-w-[26rem] py-[1.25rem] px-[2.125rem]">
              <img
                src={mailUsImg}
                alt="contact_img"
              />
              <span className="font-bold font-poppins text-[22px] pl-[0.625rem] pr-[2.25rem]">
                Call Us
              </span>
              <span>+001 6547 6589</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
