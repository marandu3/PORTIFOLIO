import React, { useState } from "react";
import Profile from "../assets/profilepic.jpg";
import QRCode from "../assets/qrcode.jpg";
import Typewriter from "typewriter-effect";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import gmail from "../assets/gmail.png";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";

function Home() {
  const [showQR, setShowQR] = useState(false); // State to toggle QR code visibility
  const { darkMode } = useTheme();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow md:flex">
        {/* Left Section */}
        <div className="w-full md:w-[60%] mt-2 flex justify-center pt-20 shadow-md pb-4">
          <div className="w-[90%] md:w-[80%]">
            <div className="flex flex-wrap items-center">
              <p className={`text-3xl font-bold ${darkMode ? 'text-light-100' : 'text-gray-800'}`}>
                Hello. I'm Marandu,{" "}
              </p>
              <div className="w-full md:w-auto text-4xl text-primary-500 font-bold whitespace-normal">
                <Typewriter
                  options={{
                    strings: [
                      "a passionate Web Developer",
                      "Tech Enthusiast",
                      "an aspiring Computer Engineer",
                    ],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "inline",
                    cursorClassName: "inline",
                  }}
                />
              </div>
            </div>
            <p className={`mt-6 text-xl text-justify ${darkMode ? 'text-white' : 'text-black'}`}>
              I specialize in creating intuitive, responsive, and visually
              appealing websites that bring ideas to life. With a deep curiosity
              for technology and a drive for continuous learning, I explore the
              endless possibilities of software, code, and innovative solutions
              to solve real-world problems.
            </p>

            <div className="flex justify-center">
              <button
                onClick={() => setShowQR(true)}
                className={`flex flex-row gap-4 items-center space-x-2 px-6 py-3 rounded-md mt-6 text-lg ${
                  darkMode 
                    ? 'bg-gradient-to-r from-primary-700 to-secondary-700 text-white hover:from-primary-600 hover:to-secondary-600' 
                    : 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-400 hover:to-secondary-400'
                }`}
              >
                <span>Let's Connect</span>
              </button>
            </div>

            <div className="flex justify-center gap-8 mt-8">
              <FaGithub
                size={50}
                className={`hover:cursor-pointer hover:text-primary-500 transition-colors ${darkMode ? 'text-light-100' : 'text-gray-800'}`}
                onClick={() => window.open("https://github.com/marandu3/PORTIFOLIO")}
              />
              <FaInstagramSquare
                size={50}
                className={`hover:cursor-pointer hover:text-primary-500 transition-colors ${darkMode ? 'text-light-100' : 'text-gray-800'}`}
                onClick={() =>
                  window.open("https://www.instagram.com/_m32003")
                }
              />
              <FaLinkedin
                size={50}
                className={`hover:cursor-pointer hover:text-primary-500 transition-colors ${darkMode ? 'text-light-100' : 'text-primary-700'}`}
                color={darkMode ? "#e0f2fe" : "darkblue"}
              />
              <img
                src={gmail}
                alt="gmail"
                className="w-14 hover:cursor-pointer h-14 hover:opacity-80 transition-opacity"
                onClick={() =>
                  window.open("mailto:johnwillymarandu@gmail.com")
                }
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex pb-16 md:w-[40%] justify-center pt-3 items-center shadow-lg">
          <div className="relative group">
            {/* Profile image container with hover effect */}
            <div className="relative rounded-full p-1 bg-white overflow-hidden transform transition-all duration-300 group-hover:scale-110 group-hover:z-20 group-hover:shadow-2xl">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 animate-gradient"></div>
              <img
                src={Profile}
                alt="Profile"
                className="relative object-contain w-80 h-80 rounded-full z-10" // Increased size by 20%
              />
            </div>
          </div>
        </div>
      </div>

      {/* QR Code Modal */}
      {showQR && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className={`p-6 rounded-lg shadow-lg text-center ${darkMode ? 'bg-dark-100 text-light-100' : 'bg-white text-gray-800'}`}>
            <h2 className="text-lg font-bold mb-4">Scan the QR Code</h2>
            <img src={QRCode} alt="QR Code" className="w-48 h-48 mx-auto" />
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={() => setShowQR(false)}
                className={`px-4 py-2 rounded-md ${
                  darkMode 
                    ? 'bg-primary-700 text-white hover:bg-primary-600' 
                    : 'bg-primary-600 text-white hover:bg-primary-500'
                }`}
              >
                Close
              </button>
              <button
                onClick={() =>
                  window.open("https://wa.me/qr/OBIC7R7IIAZJH1")
                }
              >
                <IoLogoWhatsapp size={35} color="green" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
