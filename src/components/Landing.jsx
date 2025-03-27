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
    <div className="flex flex-col relative">
      {/* Main Content */}
      <div className="md:flex flex-grow">
        {/* Left Section */}
        <div className="w-full md:w-[50%] mt-2 flex justify-center pt-20 shadow-md pb-4">
          <div className="w-[90%]">
            <div className="flex flex-wrap items-center">
              <p className={`text-xl font-bold ${darkMode ? 'text-light-100' : 'text-gray-800'}`}>
                Hello. I'm Marandu,{" "}
              </p>
              <div className="w-full md:w-auto text-2xl text-primary-500 font-bold">
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
            <p className={`mt-4 text-lg text-justify ${darkMode ? 'text-white' : 'text-black'}`}>
              I specialize in creating intuitive, responsive, and visually
              appealing websites that bring ideas to life. With a deep curiosity
              for technology and a drive for continuous learning, I explore the
              endless possibilities of software, code, and innovative solutions
              to solve real-world problems.
            </p>

            <div className="flex justify-center">
              <button
                onClick={() => setShowQR(true)}
                className={`flex flex-row gap-4 items-center space-x-2 px-4 py-2 rounded-md mt-4 ${
                  darkMode 
                    ? 'bg-gradient-to-r from-primary-700 to-secondary-700 text-white hover:from-primary-600 hover:to-secondary-600' 
                    : 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-400 hover:to-secondary-400'
                }`}
              >
                <span>Let's Connect</span>
              </button>
            </div>

            <div className="hidden md:flex justify-center gap-8 mt-7">
              <FaGithub
                size={45}
                className={`hover:cursor-pointer hover:text-primary-500 transition-colors ${darkMode ? 'text-light-100' : 'text-gray-800'}`}
                onClick={() => window.open("https://github.com/marandu3/PORTIFOLIO")}
              />
              <FaInstagramSquare
                size={45}
                className={`hover:cursor-pointer hover:text-primary-500 transition-colors ${darkMode ? 'text-light-100' : 'text-gray-800'}`}
                onClick={() =>
                  window.open("https://www.instagram.com/_m32003")
                }
              />
              <FaLinkedin
                size={45}
                className={`hover:cursor-pointer hover:text-primary-500 transition-colors ${darkMode ? 'text-light-100' : 'text-primary-700'}`}
                color={darkMode ? "#e0f2fe" : "darkblue"}
              />
              <img
                src={gmail}
                alt="gmail"
                className="w-12 hover:cursor-pointer h-12 hover:opacity-80 transition-opacity"
                onClick={() =>
                  window.open("mailto:johnwillymarandu@gmail.com")
                }
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex pb-16 md:w-[50%] justify-center pt-3 items-center shadow-lg">
          <div className="relative group">
            {/* Animated dotted lines around image */}
            <div className="absolute inset-0 -m-12 rounded-full animate-pulse opacity-80">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute top-1/2 left-1/2 h-full w-0.5 animate-gradient-pulse"
                  style={{ 
                    transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                    background: 'linear-gradient(to top, transparent 20%, transparent 40%, var(--tw-gradient-from) 50%, var(--tw-gradient-to) 60%, transparent 80%)',
                    '--tw-gradient-from': darkMode ? 'rgb(56, 189, 248)' : 'rgb(14, 165, 233)',
                    '--tw-gradient-to': darkMode ? 'rgb(232, 121, 249)' : 'rgb(217, 70, 239)'
                  }}
                ></div>
              ))}
            </div>
            
            {/* Profile image container with hover effect */}
            <div className="relative rounded-full p-1 bg-white overflow-hidden transform transition-all duration-300 group-hover:scale-110 group-hover:z-20 group-hover:shadow-2xl">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 animate-gradient"></div>
              <img
                src={Profile}
                alt="Profile"
                className="relative object-contain w-64 h-64 rounded-full z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer/>

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
    </div>
  );
}

export default Home;
