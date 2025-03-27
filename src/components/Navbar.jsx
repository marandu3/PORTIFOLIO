import { FaWindowClose } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { NavLink } from "react-router-dom"; 
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/logo.jpg";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`flex items-center flex-col gap-y-1 ${darkMode ? 'bg-dark-200 text-light-100' : 'bg-white text-black'} transition-colors duration-300`}>
      {/* Top Navbar */}
      <div
        className={`flex w-[97%] h-[80px] justify-between items-center px-4 md:px-8 rounded-md border-b-4 border-r-4 shadow-md ${darkMode ? 'bg-dark-100 border-primary-700' : 'bg-white border-gray-200'}`}
      >
        {/* Logo */}
        <div className="font-bold text-2xl md:text-3xl font-serif px-2">
          <div className={`${darkMode ? 'bg-dark-300' : 'bg-slate-500'} overflow-hidden w-14 h-13 rounded-full flex items-center justify-center`}>
            <img src={logo} alt="logo" className="w-14 h-14 rounded-full" />
          </div>
        </div>

        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme} 
          className={`p-2 rounded-full ${darkMode ? 'bg-dark-300 text-primary-400 hover:bg-dark-100' : 'bg-light-200 text-primary-600 hover:bg-light-300'} transition-colors duration-300`}
        >
          {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
        </button>

        {/* Hamburger Menu Icon */}
        <div className="flex items-center md:hidden">
          {isMenuOpen ? (
            <FaWindowClose
              size={27}
              className="hover:cursor-pointer"
              color={darkMode ? "white" : "black"}
              onClick={toggleMenu}
            />
          ) : (
            <AiOutlineMenu
              size={27}
              className="hover:cursor-pointer"
              color={darkMode ? "white" : "black"}
              onClick={toggleMenu}
            />
          )}
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <ul className="flex flex-row gap-x-12 font-semibold text-lg">
            <NavLink to="/" onClick={closeMenu}>
              <li className={`hover:text-primary-500 cursor-pointer px-4 py-2 ${darkMode ? 'hover:bg-dark-300' : 'hover:bg-light-100'} rounded-lg transition-colors duration-300`}>Home</li>
            </NavLink>
            <NavLink to="/Abouts/Abouts/Education" onClick={closeMenu}>
              <li className={`hover:text-primary-500 cursor-pointer px-4 py-2 ${darkMode ? 'hover:bg-dark-300' : 'hover:bg-light-100'} rounded-lg transition-colors duration-300`}>About</li>
            </NavLink>
            <NavLink to="/projects" onClick={closeMenu}>
              <li className={`hover:text-primary-500 cursor-pointer px-4 py-2 ${darkMode ? 'hover:bg-dark-300' : 'hover:bg-light-100'} rounded-lg transition-colors duration-300`}>My Projects</li>
            </NavLink>
            <NavLink to="/contact" onClick={closeMenu}>
              <li className={`hover:text-primary-500 cursor-pointer px-4 py-2 ${darkMode ? 'hover:bg-dark-300' : 'hover:bg-light-100'} rounded-lg transition-colors duration-300`}>
                Contacts
              </li>
            </NavLink>
          </ul>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className={`w-full flex flex-col items-center py-4 md:hidden shadow-md ${darkMode ? 'bg-dark-100 text-light-100' : 'bg-gray-100 text-black'} transition-colors duration-300`}>
          <ul className="flex flex-col gap-y-4 text-center font-semibold text-lg">
            <NavLink to="/" onClick={closeMenu}>
              <li className={`hover:text-primary-500 cursor-pointer px-4 py-2 ${darkMode ? 'hover:bg-dark-300' : 'hover:bg-light-100'} rounded-lg transition-colors duration-300`}>Home</li>
            </NavLink>
            <NavLink to="/Abouts/Abouts/Education" onClick={closeMenu}>
              <li className={`hover:text-primary-500 cursor-pointer px-4 py-2 ${darkMode ? 'hover:bg-dark-300' : 'hover:bg-light-100'} rounded-lg transition-colors duration-300`}>About</li>
            </NavLink>
            <NavLink to="/projects" onClick={closeMenu}>
              <li className={`hover:text-primary-500 cursor-pointer px-4 py-2 ${darkMode ? 'hover:bg-dark-300' : 'hover:bg-light-100'} rounded-lg transition-colors duration-300`}>My Projects</li>
            </NavLink>
            <NavLink to="/contact" onClick={closeMenu}>
              <li className={`hover:text-primary-500 cursor-pointer px-4 py-2 ${darkMode ? 'hover:bg-dark-300' : 'hover:bg-light-100'} rounded-lg transition-colors duration-300`}>Contacts</li>
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
