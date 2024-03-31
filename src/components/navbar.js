import React, { useState } from "react";
import ArrowCutLogo from "../assets/logo.svg";
export const links = [
  { url: "/", title: "Home" },
  { url: "/products", title: "Products" },
  { url: "/technologies", title: "Technologies" },
  { url: "/about", title: "About Us" },
  { url: "/contact", title: "Contact Us" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-24 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* LOGO */}
      <div>
        <img
          src={ArrowCutLogo}
          alt="arrowcut_logo"
          width={159}
          height={36.32}
        />
      </div>
      <div className="hidden lg:flex items-center gap-4 w-6/12">
        {links.map((link) =>
          link.title === "Contact Us" ? (
            <button
              className="absolute right-20 bg-red text-white rounded py-2.5 pl-2.5 pr-4"
              key={`${link.title}_regular_menu`}
              href={link.url}
            >
              {link.title}
            </button>
          ) : (
            <a
              key={`${link.title}_regular_menu`}
              href={link.url}
            >
              {link.title}
            </a>
          )
        )}
      </div>

      {/* RESPONSIVE MENU */}
      <div className="lg:hidden xl:hidden">
        {/* MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
        >
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>
        {/* MENU LIST */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-gradient-to-tl from-white to-black text-white flex flex-col items-center justify-center gap-8 text-xl">
            {/* LOGO */}
            <div>
              <img
                src={ArrowCutLogo}
                alt="arrowcut_logo"
                width={159}
                height={36.32}
              />
            </div>
            {links.map((link) => (
              <a
                key={`${link.title}_hamburger_menu`}
                href={link.url}
              >
                {link.title}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
