import React from "react";
import Profile from "../assets/profilepic.jpg";
import Typewriter from "typewriter-effect";
import { FaWhatsapp } from "react-icons/fa";

function Home() {
  return (
    <div className="md:flex">
      {/* Left Section */}
      <div className="w-full md:w-[50%] mt-2 md:h-screen flex justify-center pt-20">
        <div className="w-[90%]">
          <div className="flex items-center space-x-2">
            <p className="text-xl font-bold text-gray-800">
              Hello. I'm Marandu,
            </p>
            <Typewriter
              options={{
                strings: [
                  "a passionate Web Developer",
                  "Tech Enthusiast",
                  "an aspiring Computer Engineer",
                ],
                autoStart: true,
                loop: true,
                wrapperClassName: "text-2xl text-blue-600 font-bold",
                cursorClassName: "text-xl text-blue-600",
              }}
            />
          </div>
          <p className="mt-4 text-lg text-gray-800 text-justify">
            I specialize in creating intuitive, responsive, and visually
            appealing websites that bring ideas to life. With a deep curiosity
            for technology and a drive for continuous learning, I explore the
            endless possibilities of software, code, and innovative solutions to
            solve real-world problems.
          </p>

          <div>
            <button onClick={()=>window.open('https://wa.me/qr/OBIC7R7IIAZJH1')}
            className="flex items-center space-x-2 hover:text-green- bg-blue-600 text-white px-4 py-2 rounded-md mt-4">
              <span >Let's Connect</span>
              <span className="text-white hover:text-green-500"> 
              <FaWhatsapp/>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex md:w-[50%] md:h-screen justify-center items-center">
        <img
          src={Profile}
          alt="Profile"
          className="object-contain w-64 h-64 rounded-full"
        />
      </div>
    </div>
  );
}

export default Home;
