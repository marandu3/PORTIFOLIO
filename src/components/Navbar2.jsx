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

  // Predefined colors based on theme
  const colorSelector = () => {
    const lightTheme = {
      textColor: "text-black",
      backgroundColor: "bg-white",
      borderColor: "border-gray-300",
      hoverColor: "hover:text-gray-500",
      menuBgColor: "bg-gray-100",
      menuTextColor: "text-black",
      iconColor: "text-black",
    };

    const darkTheme = {
      textColor: "text-white",
      backgroundColor: "bg-black",
      borderColor: "border-gray-700",
      hoverColor: "hover:text-gray-500",
      menuBgColor: "bg-gray-800",
      menuTextColor: "text-white",
      iconColor: "text-white",
    };

    return isblack ? darkTheme : lightTheme;
  };

  const colors = colorSelector(); // Get the correct theme colors

  return (
    <div className={`flex items-center flex-col gap-y-1 ${colors.backgroundColor} h-screen`}>
      {/* Top Navbar */}
      <div
        className={`flex w-[97%] h-[80px] justify-between items-center px-4 sm:px-8 rounded-md border-b-4 ${colors.borderColor} shadow-md`}
      >
        {/* Logo */}
        <div className={`font-bold text-2xl sm:text-3xl font-serif px-2 ${colors.textColor}`}>
          <div className="bg-slate-500 w-14 h-14 rounded-full flex items-center justify-center">
            {/* Profile Image Placeholder */}
          </div>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="flex items-center sm:hidden">
          <div
            className={`flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform duration-200 cursor-pointer`}
            onClick={themeHandler}
          >
            {isblack ? <IoMoon size={30} className={colors.iconColor} /> : <IoMoonOutline size={30} />}
          </div>

          {isMenuOpen ? (
            <FaWindowClose
              size={27}
              className="hover:cursor-pointer"
              color={colors.iconColor}
              onClick={toggleMenu}
            />
          ) : (
            <AiOutlineMenu
              size={27}
              className="hover:cursor-pointer"
              color={colors.iconColor}
              onClick={toggleMenu}
            />
          )}
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden sm:flex flex-1 items-center justify-center">
          <ul className={`flex flex-row gap-x-12 font-semibold text-lg ${colors.textColor}`}>
            <li className={`cursor-pointer px-4 py-2 ${colors.hoverColor}`}>Home</li>
            <li className={`cursor-pointer px-4 py-2 ${colors.hoverColor}`}>About</li>
            <li className={`cursor-pointer px-4 py-2 ${colors.hoverColor}`}>My Projects</li>
            <li className={`cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-xl ${colors.hoverColor}`}>Blogs</li>
            <li className={`cursor-pointer px-4 py-2 bg-pink-600 text-white rounded-xl ${colors.hoverColor}`}>Contacts</li>
          </ul>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div
          className={`w-full flex flex-col items-center py-4 sm:hidden shadow-md ${colors.menuBgColor}`}
        >
          <ul className={`flex flex-col gap-y-4 text-center font-semibold text-lg ${colors.menuTextColor}`}>
            <li className={`cursor-pointer px-4 py-2 ${colors.hoverColor}`}>Home</li>
            <li className={`cursor-pointer px-4 py-2 ${colors.hoverColor}`}>About</li>
            <li className={`cursor-pointer px-4 py-2 ${colors.hoverColor}`}>My Projects</li>
            <li className={`cursor-pointer px-4 py-2 ${colors.hoverColor}`}>Blogs</li>
            <li className={`cursor-pointer px-4 py-2 ${colors.hoverColor}`}>Contacts</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
