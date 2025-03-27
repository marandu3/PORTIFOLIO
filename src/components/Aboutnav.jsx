import React from "react";
import { NavLink } from "react-router";
import { useTheme } from "../context/ThemeContext";

function Aboutnav() {
  const { darkMode } = useTheme();

  return (
    <div className="flex justify-center w-full my-8">
      <div className={`relative w-[95%] rounded-xl shadow-lg overflow-hidden ${
        darkMode ? 'shadow-primary-900/30' : 'shadow-secondary-500/20'
      }`}>
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 bg-[length:200%_100%] animate-gradient-pulse opacity-90"></div>
        
        {/* Navigation container */}
        <div className="relative flex items-center justify-around py-3 px-2 backdrop-blur-sm">
          {/* EDUCATION NavLink */}
          <NavLink
            to="Abouts/Education"
            className={({ isActive }) =>
              `relative text-center px-4 py-2 font-medium transition-all duration-300 rounded-lg overflow-hidden ${
                isActive
                  ? `${darkMode ? 'text-primary-400' : 'text-primary-600'} bg-white/90 shadow-md transform scale-105`
                  : `text-white hover:bg-white/10 transform hover:scale-105`
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="relative z-10">EDUCATION</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-primary-400 to-secondary-400"></span>
                )}
              </>
            )}
          </NavLink>

          {/* Decorative separator */}
          <div className="w-1 h-8 rounded-full bg-white/30 backdrop-blur-sm"></div>

          {/* SKILLS NavLink */}
          <NavLink
            to="Abouts/Skills"
            className={({ isActive }) =>
              `relative text-center px-4 py-2 font-medium transition-all duration-300 rounded-lg overflow-hidden ${
                isActive
                  ? `${darkMode ? 'text-primary-400' : 'text-primary-600'} bg-white/90 shadow-md transform scale-105`
                  : `text-white hover:bg-white/10 transform hover:scale-105`
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="relative z-10">SKILLS</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-primary-400 to-secondary-400"></span>
                )}
              </>
            )}
          </NavLink>

          {/* Decorative separator */}
          <div className="w-1 h-8 rounded-full bg-white/30 backdrop-blur-sm"></div>

          {/* TIMELINE NavLink */}
          <NavLink
            to="Abouts/Timeline"
            className={({ isActive }) =>
              `relative text-center px-4 py-2 font-medium transition-all duration-300 rounded-lg overflow-hidden ${
                isActive
                  ? `${darkMode ? 'text-primary-400' : 'text-primary-600'} bg-white/90 shadow-md transform scale-105`
                  : `text-white hover:bg-white/10 transform hover:scale-105`
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="relative z-10">TIMELINE</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-primary-400 to-secondary-400"></span>
                )}
              </>
            )}
          </NavLink>
        </div>
        
        {/* Decorative border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20"></div>
      </div>
    </div>
  );
}

export default Aboutnav;
