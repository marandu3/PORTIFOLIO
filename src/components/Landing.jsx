import React, { useState } from "react";
import Profile from "../assets/profilepic.jpg";
import QRCode from "../assets/qrcode.jpg";
import Typewriter from "typewriter-effect";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare, FaLinkedin, FaGithub  } from "react-icons/fa";
import gmail from "../assets/gmail.png";

function Home() {
  const [showQR, setShowQR] = useState(false); // State to toggle QR code visibility

  return (
    <div className="md:flex">
      {/* Left Section */}
      <div className="w-full md:w-[50%] mt-2 md:h-screen flex justify-center pt-20 shadow-md pb-4">
        <div className="w-[90%]">
          <div className="flex flex-wrap items-center">
            <p className="text-xl font-bold text-gray-800">
              Hello. I'm Marandu,{" "}
            </p>
            <div className="w-full md:w-auto text-2xl text-blue-600 font-bold">
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
          <p className="mt-4 text-lg text-gray-800 text-justify">
            I specialize in creating intuitive, responsive, and visually
            appealing websites that bring ideas to life. With a deep curiosity
            for technology and a drive for continuous learning, I explore the
            endless possibilities of software, code, and innovative solutions to
            solve real-world problems.
          </p>

          <div className="flex justify-center">
            <button
              onClick={() => setShowQR(true)}
              className="flex flex-row gap-4 items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-700"
            >
              <span>Let's Connect</span>
            </button>
          </div>

          <div className="flex  justify-center gap-8 mt-7">
            <FaGithub size={45} onClick={()=>window.open("https://www.github.com/marandu3")}/>
            <FaInstagramSquare size={45} onClick={()=>window.open("https://www.instagram.com/_m32003")}/>
            <FaLinkedin size={45} color="darkblue"/>
            <img src={gmail} alt="gmail" className="w-12 h-12" onClick={()=>window.open("mailto:johnwillymarandu@gmail.com")}/> 
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex pb-2 md:w-[50%] md:h-screen justify-center pt-3 items-center ">
        <img
          src={Profile}
          alt="Profile"
          className="object-contain w-64 h-64 rounded-full drop-shadow-xl shadow-xl"
        />
      </div>

      {/* Footer : only visible in small screens*/}
        <div className="md:hidden w-full bg-blue-400 text-white text-center py-2 flex gap-4">
        <FaInstagramSquare size={30}  color='red' onClick={()=>window.open('https://instagram.com/_m32003')}/>
        <FaLinkedin size={30} className="hover:cursor-pointer" color='darkblue'/>
        <FaGithub size={30} className="hover:cursor-pointer" color='black' onClick={()=>window.open("https://github.com/marandu3")}/>
        </div>

      {/* QR Code Modal */}
      {showQR && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-bold mb-4">Scan the QR Code</h2>
            <img src={QRCode} alt="QR Code" className="w-48 h-48 mx-auto" />

            <div classname="flex flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setShowQR(false)}
                className="mt-a bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Close
              </button>
              <button onClick={()=>window.open("https://wa.me/qr/OBIC7R7IIAZJH1")} className="translate-x-4 translate-y-2">
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
