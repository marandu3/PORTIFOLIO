import { FaWindowClose } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { FcBusiness } from "react-icons/fc";
import { FaEnvelopeOpen } from "react-icons/fa";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { useState } from "react";

function Navbar() {
  const [isblack, setIsBlack] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const themeHandler = () => {
    setIsBlack(!isblack);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col gap-y-1">
      {/* Top Navbar */}
      <div className="flex bg-papobg w-full h-[80px] justify-between items-center px-4 sm:px-8">
        {/* Logo */}
        <div className="font-bold text-2xl sm:text-3xl font-serif">
          <p>MY PORTFOLIO</p>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="flex items-center sm:hidden">
          {isMenuOpen ? (
            <FaWindowClose
              size={27}
              className="hover:cursor-pointer"
              color="white"
              onClick={toggleMenu}
            />
          ) : (
            <AiOutlineMenu
              size={27}
              className="hover:cursor-pointer"
              color="white"
              onClick={toggleMenu}
            />
          )}
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden sm:flex justify-between flex-1 items-center">
          <IoMdHome size={60} className="hover:scale-110 transition-transform duration-200" />
          <IoMdContact size={60} className="hover:scale-110 transition-transform duration-200" />
          <FcBusiness size={60} className="hover:scale-110 transition-transform duration-200" />
          <FaEnvelopeOpen size={55} className="hover:scale-110 transition-transform duration-200" />
          <div
            className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform duration-200 cursor-pointer"
            onClick={themeHandler}
          >
            {isblack ? <IoMoon size={30} /> : <IoMoonOutline size={30} />}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="w-full bg-papobg flex flex-col items-center py-4 sm:hidden">
          <ul className="text-white space-y-4 font-semibold text-lg">
            <li className="hover:text-gray-400 cursor-pointer">HOME</li>
            <li className="hover:text-gray-400 cursor-pointer">ABOUT ME</li>
            <li className="hover:text-gray-400 cursor-pointer">MY PORTFOLIO</li>
            <li className="hover:text-gray-400 cursor-pointer">CONTACT ME</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
