//@ts-ignore
import React from "react";
import { NavLinkType } from "../../types/components";
import { navLinks } from "../../utils/components";
import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";

const Navbar = () => {
  const cartAmount = 2;
  return (
    <nav className="w-full z-50 fixed top-0 left-0 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-white h-20 flex items-center justify-between md:px-40 px-4">
      <h1 className="text-2xl text-pry font-extrabold">Furnix</h1>
      <ul className="flex items-center md:gap-8">
        {navLinks.map((link: NavLinkType, key: number) => {
          const active = link.path === window.location.pathname;
          return (
            <Link to={link.path} key={key}>
              <li
                className={`font-semibold hover:text-pry duration-500 ${
                  active ? "text-pry" : "text-[#413c3c]"
                }`}
              >
                {link.name}
              </li>
            </Link>
          );
        })}
      </ul>
      <button className="relative">
        <span className="absolute -top-1 -right-2 bg-pry rounded-full text-xs h-4 w-4 text-white font-medium">
          {cartAmount}
        </span>
        <IoMdCart className="text-2xl" />
      </button>
    </nav>
  );
};

export default Navbar;
