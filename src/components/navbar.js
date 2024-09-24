import React, { useState } from "react";
import ArrowCutLogo from "../assets/logo.svg";
import fblogo from "../assets/fb_icon.svg";
import xlogo from "../assets/x_logo.svg";
import instalogo from "../assets/insta_logo.svg";
import youtubelogo from "../assets/youtube_logo.svg";
import { motion, MotionConfig } from "framer-motion";

export const links = [
  { url: "/", title: "Home" },
  { url: "/products", title: "Products" },
  { url: "/technologies", title: "Technologies" },
  { url: "/about", title: "About Us" },
  { url: "/contact", title: "Contact Us" },
];

const linkPath = window?.location?.pathname;

const Navbar = ({ scrollPosition, scroll }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={
        scrollPosition.scrollTop <= 1
          ? "h-24 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48"
          : "hidden h-24 items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48"
      }
    >
      {/* LOGO */}
      <div>
        <img
          src={ArrowCutLogo}
          alt="arrowcut_logo"
          width={159}
          height={36.32}
        />
      </div>
      <div className="hidden lg:flex items-start gap-4 w-[77%]">
        {links.map((link, idx) =>
          link.title === "Contact Us" &&
          linkPath !== "/contact" &&
          scroll < 23 ? (
            <button key={`${link.title}_item_key${idx}`}>
              <a
                className="lg:absolute top-6 right-20 bg-red text-white rounded py-2.5 pl-2.5 pr-4"
                key={`${link.title}_regular_menu`}
                href={link.url}
              >
                {link.title}
              </a>
            </button>
          ) : (
            <a
              className="mr-10"
              key={`${link.title}_regular_menu`}
              href={link.url}
            >
              {linkPath === link.url && idx !== 4 ? (
                <span className="font-bold"> {link.title}</span>
              ) : (
                link.title !== "Contact Us" && <span> {link.title}</span>
              )}
            </a>
          )
        )}
      </div>

      {/* RESPONSIVE MENU */}
      <div className="lg:hidden xl:hidden">
        {/* MENU BUTTON */}
        <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
          <motion.button
            initial={false}
            onClick={() => setOpen(!open)}
            className="w-20 h-20 z-20 relative hover:bg-white/20 transition-colors rounded-full"
            animate={open ? "open" : "closed"}
          >
            <motion.span
              style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
              className="absolute w-10 h-1 bg-[#282828] rounded"
              variants={{
                open: {
                  rotate: ["0deg", "0deg", "45deg"],
                  top: ["35%", "50%", "50%"],
                },

                closed: {
                  rotate: ["45deg", "0deg", "0deg"],
                  top: ["50%", "50%", "35%"],
                },
              }}
            ></motion.span>
            <motion.span
              style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
              className="absolute w-10 h-1 bg-[#282828] rounded"
              variants={{
                open: {
                  rotate: ["0deg", "0deg", "-45deg"],
                  top: ["35%", "50%", "50%"],
                },
                closed: {
                  rotate: ["-45deg", "0deg", "0deg"],
                  top: ["50%", "50%", "35%"],
                },
              }}
            ></motion.span>
            <motion.span
              style={{
                left: "calc(50% + 10px)",
                bottom: "35%",
                x: "-50%",
                y: "50%",
              }}
              className="absolute w-5 h-1 bg-[#282828] rounded"
              variants={{
                open: {
                  rotate: ["0deg", "0deg", "45deg"],
                  left: "50%",
                  bottom: ["50%", "50%", "35%"],
                  visibility: "hidden",
                },
                closed: {
                  rotate: ["45deg", "0deg", "0deg"],
                  left: "calc(50% + 10px)",
                  bottom: ["35%", "50%", "50%"],
                },
              }}
            ></motion.span>
          </motion.button>
        </MotionConfig>
        {/* MENU LIST */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-gradient-to-tl from-red to-white text-white flex flex-col items-center justify-center gap-8 text-xl z-10">
            {/* LOGO */}
            <div>
              <img
                src={ArrowCutLogo}
                alt="arrowcut_logo"
                width={159}
                height={36.32}
                className="drop-shadow-md pb-5"
              />
            </div>

            <div className="py-5 flex flex-col items-center justify-center gap-8">
              {links.map((link) => (
                <a
                  key={`${link.title}_hamburger_menu`}
                  href={link.url}
                  className="drop-shadow-lg"
                >
                  {link.title}
                </a>
              ))}
            </div>
            <div className="w-2/3 flex justify-between items-center drop-shadow-md pt-5">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
