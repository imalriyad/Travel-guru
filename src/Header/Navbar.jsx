import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navlink = ["Home", "News", "Destination", "Blog", "Contact"];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="text-white py-1">
      <div className="mx-auto text-white pt-[25px] px-4 max-w-screen-2xl md:flex items-center lg:gap-x-12 md:gap-x-5">
        <div className="flex w-full items-center justify-between md:gap-x-12 gap-x-3">
          {!menuOpen ? (
            <GiHamburgerMenu
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-6xl lg:hidden block "
            ></GiHamburgerMenu>
          ) : (
            <CgClose
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-6xl text-white lg:hidden block "
            ></CgClose>
          )}
          <img
            src="https://i.ibb.co/CP8ND9T/logo.png"
            className="md:w-auto w-[30%]"
            alt=""
          />
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search your Destination..."
              className="input text-white font-Montserrat bg-[#FFFFFF33] pl-14 border border-white input-md w-full rounded-md max-w-md"
            />
            <FiSearch className="text-2xl absolute top-3 left-4" />
          </div>
        </div>
        {navlink.map((link) => (
          <NavLink to={`/${link == "Home" ? "" : link}`} key={link}>
            <li
              className={`list-none ${
                menuOpen ? "block transition-all duration-700" : "hidden"
              } md:mb-0 mb-2  md:hidden lg:block text-lg font-Montserrat font-medium`}
            >
              {link}
            </li>
          </NavLink>
        ))}
        <button
          className={`px-7 ${
            menuOpen ? "block" : "md:block hidden"
          } rounded font-Montserrat font-medium text-black py-2 bg-[#F9A51A]`}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
