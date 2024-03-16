import React from "react";
import logo from "../assets/footer_logo.svg";
import fblogo from "../assets/fb_icon.svg";
import xlogo from "../assets/x_logo.svg";
import instalogo from "../assets/insta_logo.svg";
import youtubelogo from "../assets/youtube_logo.svg";
import { links } from "./navbar";

const Footer = () => {
  const Countries = [
    { label: "EN", value: "English" },
    { label: "KO", value: "Korean" },
    { label: "HI", value: "Hindi" },
  ];
  return (
    <div className="flex flex-col items-center justify-evenly h-[25rem] w-full bg-[#282828]">
      <img
        src={logo}
        alt="footer_logo_arrowcut"
        width={167.87}
        height={38.32}
      />
      <div className="w-1/3 flex justify-between items-center">
        {links.map(
          (link) =>
            link.title !== "Contact Us" && (
              <a
                className="text-white"
                key={`${link.title}_regular_menu`}
                href={link.url}
              >
                {link.title}
              </a>
            )
        )}
      </div>
      <div className="w-11/12 flex justify-around items-center">
        <div className="w-1/3">
          <select
            name="languages"
            id="lang"
          >
            {Countries.map((lang) => (
              <option value={lang.value}>{lang.label}</option>
            ))}
          </select>
        </div>
        <div className="w-1/3 flex justify-center gap-12 items-center ">
          <a href="https://www.facebook.com/">
            <img
              src={fblogo}
              alt="fb_logo"
            />
          </a>
          <a href="https://www.x.com/">
            <img
              src={xlogo}
              alt="x_logo"
            />
          </a>
          <a href="https://www.youtube.com/">
            <img
              src={youtubelogo}
              alt="youtube_logo"
            />
          </a>
          <a href="https://www.instagram.com/">
            <img
              src={instalogo}
              alt="instagram_logo"
            />
          </a>
        </div>
        <div className="w-1/3 flex items-center justify-end">
          <p className="text-white">
            © Copyright {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
