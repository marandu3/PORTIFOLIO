import React from 'react'

import { FaInstagramSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import gmail from "../assets/gmail.png";


function Footerpages() {
  return (
    <div>
        <footer className="bg-blue-400 mt-5 flex px-4 md:px-8  justify-between bottom-0 text-white text-center py-2 w-full z-50">
                <div className="flex md:flex md:justify-start  justify-center gap-4 items-center">
                <FaGithub
                        size={30}
                        className="hover:cursor-pointer"
                        onClick={() => window.open("https://github.com/marandu3/PORTIFOLIO")}
                      />
                      <FaInstagramSquare
                        size={30}
                        className="hover:cursor-pointer"
                        onClick={() =>
                          window.open("https://www.instagram.com/_m32003")
                        }
                      />
                      <FaLinkedin
                        size={30}
                        className="hover:cursor-pointer"
                        color="darkblue"
                      />
                      <img
                        src={gmail}
                        alt="gmail"
                        className="w-8 hover:cursor-pointer h-8"
                        onClick={() =>
                          window.open("mailto:johnwillymarandu@gmail.com")
                        }
                      />
                </div>
                <div>
                <p className="mt-2  text-black">Copyright &copy; 2025. Marandu3</p>
                </div>
                
              </footer>
    </div>
  )
}

export default Footerpages