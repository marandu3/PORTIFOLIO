import React from "react";
import { Outlet } from "react-router";
import Aboutnav from "./Aboutnav";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";

function About() {
  const { darkMode } = useTheme();
  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-dark-200' : 'bg-light-100'} transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <Aboutnav />
        <div className={`rounded-xl p-4 ${
          darkMode ? 'bg-dark-100 shadow-lg shadow-primary-900/10' : 'bg-white shadow-lg shadow-gray-200/50'
        }`}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
 