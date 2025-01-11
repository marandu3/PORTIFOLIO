import { FaWindowClose } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router"; // Import Link from react-router-dom
import Profile from '../assets/profilepic.jpg';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center flex-col gap-y-1 bg-white text-black ">  {/* Fixed theme: white background, black text */}
      {/* Top Navbar */}
      <div
        className={`flex w-[97%] h-[80px] justify-between items-center px-4 sm:px-8 rounded-md border-b-4 border-r-4 shadow-md`}
      >
        {/* Logo */}
        <div className="font-bold text-2xl sm:text-3xl font-serif px-2">
          <div className="bg-slate-500 overflow-hidden w-14 h-13 rounded-full flex items-center justify-center">
            <img src={Profile} alt="Profile" />
          </div>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="flex items-center sm:hidden">
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
          <ul className="flex flex-row gap-x-12 font-semibold text-lg">
            <Link to='/'><li className="hover:text-gray-500 cursor-pointer px-4 py-2">Home</li></Link>
            <Link to='/about'><li className="hover:text-gray-500 cursor-pointer px-4 py-2">About</li></Link>
            <Link to='/projects'><li className="hover:text-gray-500 cursor-pointer px-4 py-2">My Projects</li></Link>
            <Link to='/blog'><li className="hover:text-gray-500 cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-xl">Blogs</li></Link>
            <Link to='/contact'><li className="hover:text-gray-500 cursor-pointer px-4 py-2 bg-pink-600 text-white rounded-xl">Contacts</li></Link>
          </ul>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="w-full flex flex-col items-center py-4 sm:hidden shadow-md bg-gray-100 text-black">  {/* Fixed theme: light background, black text */}
          <ul className="flex flex-col gap-y-4 text-center font-semibold text-lg">
            <Link to='/'><li className="hover:cursor-pointer hover:border-b-2 cursor-pointer px-4 py-2">Home</li></Link>
            <Link to='/about'><li className="hover:cursor-pointer hover:border-b-2 cursor-pointer px-4 py-2">About</li></Link>
            <Link to='/projects'><li className="hover:cursor-pointer hover:border-b-2 cursor-pointer px-4 py-2">My Projects</li></Link>
            <Link to='/blog'><li className="hover:cursor-pointer hover:border-b-2 cursor-pointer px-4 py-2">Blogs</li></Link>
            <Link to='/contact'><li className="hover:cursor-pointer hover:border-b-2 cursor-pointer px-4 py-2">Contacts</li></Link>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
