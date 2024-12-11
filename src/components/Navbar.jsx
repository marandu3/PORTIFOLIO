import { FaWindowClose } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
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
    <div className="flex items-center flex-col gap-y-1">
      {/* Top Navbar */}
      <div className="flex  w-[97%] h-[80px] justify-between items-center px-4 sm:px-8 rounded-md border-b-4 border-r-2">
        {/* Logo */}
        <div className="font-bold text-black text-2xl sm:text-3xl font-serif px-2">
          <div className="bg-slate-500 w-14 h-14 rounded-full">
            {/* profileimage */}
          </div>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="flex items-center sm:hidden">

          <div
            className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform duration-200 cursor-pointer"
            onClick={themeHandler}
          >
            {isblack ? (
              <IoMoon size={30} className="text-black" />
            ) : (
              <IoMoonOutline size={30} />
            )}
          </div>

          {isMenuOpen ? (
            <FaWindowClose
              size={27}
              className="hover:cursor-pointer"
              color="black"
              onClick={toggleMenu}
            />
          ) : (
            <AiOutlineMenu
              size={27}
              className="hover:cursor-pointer"
              color="black"
              onClick={toggleMenu}
            />
          )}
        </div>
        

        {/* Desktop Navigation Links */}
        <div className="hidden sm:flex flex-1 items-center justify-center">
          <ul className="flex flex-row gap-x-12 font-semibold text-lg text-black">
            <li className="hover:text-gray-500 cursor-pointer px-4 py-2">
              Home
            </li>
            <li className="hover:text-gray-500 cursor-pointer px-4 py-2">
              About
            </li>
            <li className="hover:text-gray-500 cursor-pointer px-4 py-2">
              My Projects
            </li>

            <li className="hover:text-gray-500 cursor-pointer px-4 py-2 bg-blue-600 rounded-xl">
              Blogs
            </li>

            <li className="hover:text-gray-500 cursor-pointer px-4 py-2 bg-pink-600 rounded-xl">
              Contacts
            </li>

          </ul>
          <div
            className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform translate-x-40 duration-200 cursor-pointer"
            onClick={themeHandler}
          >
            {isblack ? (
              <IoMoon size={30} className="text-black" />
            ) : (
              <IoMoonOutline size={30} />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="w-full bg-gray-400 flex flex-col items-center py-4 sm:hidden shadow-md shadow-gray-500">
          <ul className="text-black space-y-4 font-semibold text-lg">
            <li className="hover:text-gray-500 cursor-pointer px-4 py-2">
              HOME
            </li>
            <li className="hover:text-gray-500 cursor-pointer px-4 py-2">
              ABOUT ME
            </li>
            <li className="hover:text-gray-500 cursor-pointer px-4 py-2">
              MY PORTFOLIO
            </li>
            <li className="hover:text-gray-500 cursor-pointer px-4 py-2">
              CONTACT ME
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
