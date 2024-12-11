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
    <div className={`flex items-center flex-col gap-y-1 ${isblack ? "bg-black text-white" : "bg-white text-black"} h-screen`}>
      {/* Top Navbar */}
      <div
        className={`flex w-[97%] h-[80px] justify-between items-center px-4 sm:px-8 rounded-md border-b-4 border-r-4  shadow-md`}
      >
        {/* Logo */}
        <div className="font-bold text-2xl sm:text-3xl font-serif px-2">
          <div className="bg-slate-500 w-14 h-14 rounded-full flex items-center justify-center">
            {/* Profile Image Placeholder */}
          </div>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="flex items-center sm:hidden">
          <div
            className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform duration-200 cursor-pointer"
            onClick={themeHandler}
          >
            {isblack ? <IoMoon size={30} className="text-white" /> : <IoMoonOutline size={30} />}
          </div>

          {isMenuOpen ? (
            <FaWindowClose
              size={27}
              className="hover:cursor-pointer"
              color={isblack ? "white" : "black"}
              onClick={toggleMenu}
            />
          ) : (
            <AiOutlineMenu
              size={27}
              className="hover:cursor-pointer"
              color={isblack ? "white" : "black"}
              onClick={toggleMenu}
            />
          )}
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden sm:flex flex-1 items-center justify-center">
          <ul className="flex flex-row gap-x-12 font-semibold text-lg">
            <li className="hover:text-gray-500 cursor-pointer px-4 py-2">Home</li>
            <li className="hover:text-gray-500 cursor-pointer px-4 py-2">About</li>
            <li className="hover:text-gray-500 cursor-pointer px-4 py-2">My Projects</li>
            <li className="hover:text-gray-500 cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-xl">Blogs</li>
            <li className="hover:text-gray-500 cursor-pointer px-4 py-2 bg-pink-600 text-white rounded-xl">Contacts</li>
          </ul>
          <div
            className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform translate-x-40 duration-200 cursor-pointer"
            onClick={themeHandler}
          >
            {isblack ? <IoMoon size={30} className="text-white" /> : <IoMoonOutline size={30} />}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div
          className={`w-full flex flex-col items-center py-4 sm:hidden shadow-md ${
            isblack ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
          }`}
        >
          <ul className="flex flex-col gap-y-4 text-center font-semibold text-lg">
            <li className="hover:cursor-pointer hover:border-b-2 cursor-pointer px-4 py-2">Home</li>
            <li className="hover:cursor-pointer hover:border-b-2 cursor-pointer px-4 py-2">About</li>
            <li className="hover:cursor-pointer hover:border-b-2 cursor-pointer px-4 py-2">My Projects</li>
            <li className="hover:cursor-pointer hover:border-b-2 cursor-pointer px-4 py-2">Blogs</li>
            <li className="hover:cursor-pointer hover:border-b-2 cursor-pointer px-4 py-2">Contacts</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
