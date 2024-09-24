import React from "react";
import logo from "../assets/footer_logo.svg";
import fblogo from "../assets/fb_icon.svg";
import xlogo from "../assets/x_logo.svg";
import instalogo from "../assets/insta_logo.svg";
import youtubelogo from "../assets/youtube_logo.svg";
import { links } from "./navbar";
import { useResponsiveJSX } from "./useResponsive";

const Footer = () => {
  const breakpoint = useResponsiveJSX([600, 900, 1200]);
  const Countries = [
    { label: "EN", value: "English" },
    { label: "KO", value: "Korean" },
    { label: "HI", value: "Hindi" },
  ];
  return (
    <div className="flex flex-col items-center justify-evenly h-[25rem] w-full bg-[#282828] py-2">
      <img
        src={logo}
        alt="footer_logo_arrowcut"
        width={167.87}
        height={38.32}
      />
      <div
        className={
          breakpoint === 0
            ? "w-1/3 flex flex-col gap-5 justify-between items-center"
            : "w-1/3 flex gap-5 justify-between items-center"
        }
      >
        {links.map(
          (link, i) =>
            link.title !== "Contact Us" && (
              <a
                className="text-white"
                key={`${link.title}_regular_menu_${i}`}
                href={link.url}
              >
                {link.title}
              </a>
            )
        )}
      </div>
      <div className=" w-11/12 flex flex-col lg:flex-row gap-5 justify-between items-center">
        <div className="h-1/3 lg:w-1/3 lg:basis-full flex items-start">
          <div className="sm:flex md:flex sm:items-center md:items-center border-white border-2 rounded">
            <select
              className="text-white bg-[#282828] border-white rounded cursor-pointer"
              name="languages"
              id="lang"
            >
              {Countries.map((lang, i) => (
                <option
                  key={`${lang.title}_regular_menu_${i}`}
                  value={lang.value}
                >
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="h-1/3 lg:w-1/3  lg:basis-full flex justify-center gap-12 items-center">
          <a href="https://www.facebook.com/">
            <img src={fblogo} alt="fb_logo" />
          </a>
          <a href="https://www.x.com/">
            <img src={xlogo} alt="x_logo" />
          </a>
          <a href="https://www.youtube.com/">
            <img src={youtubelogo} alt="youtube_logo" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={instalogo} alt="instagram_logo" />
          </a>
        </div>
        <div className="h-1/3 lg:w-1/3 lg:basis-full flex items-center justify-end">
          <p className="text-white">
            © Copyright {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
