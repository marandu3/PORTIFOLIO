import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { FaInstagramSquare, FaLinkedin, FaGithub, FaEnvelope, FaHeart, FaChevronUp } from "react-icons/fa";

function Footer() {
  const { darkMode } = useTheme();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={`relative z-10 w-full py-6 ${
      darkMode ? 'bg-dark-100' : 'bg-light-200'
    }`}>
      {/* Decorative top border with enhanced animation */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 bg-[length:200%_100%] animate-gradient-pulse"></div>
      
      {/* Scroll to top button */}
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={scrollToTop}
          className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl ${
            darkMode 
              ? 'bg-gradient-to-br from-primary-700 to-secondary-700 text-white' 
              : 'bg-gradient-to-br from-primary-500 to-secondary-500 text-white'
          }`}
        >
          <FaChevronUp />
        </button>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Links - Only visible on mobile devices */}
          <div className="flex md:hidden justify-center items-center space-x-6 mb-6">
            <a 
              href="https://github.com/marandu3/PORTIFOLIO" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transform transition-all duration-300 hover:scale-125 ${
                darkMode ? 'text-light-100 hover:text-primary-400' : 'text-gray-800 hover:text-primary-600'
              }`}
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.instagram.com/_m32003" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transform transition-all duration-300 hover:scale-125 ${
                darkMode ? 'text-light-100 hover:text-primary-400' : 'text-gray-800 hover:text-primary-600'
              }`}
            >
              <FaInstagramSquare size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transform transition-all duration-300 hover:scale-125 ${
                darkMode ? 'text-light-100 hover:text-primary-400' : 'text-gray-800 hover:text-primary-600'
              }`}
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="mailto:johnwillymarandu@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transform transition-all duration-300 hover:scale-125 ${
                darkMode ? 'text-light-100 hover:text-primary-400' : 'text-gray-800 hover:text-primary-600'
              }`}
            >
              <FaEnvelope size={24} />
            </a>
          </div>
          
          {/* Copyright */}
          <div className={`text-center md:text-right ${
            darkMode ? 'text-light-300' : 'text-gray-700'
          }`}>
            <div className="mb-2">
              <span className={`font-medium text-lg ${
                darkMode ? 'text-primary-400' : 'text-primary-600'
              }`}>
                Marandu John
              </span>
            </div>
            <div className="flex items-center justify-center md:justify-end text-sm">
              <span>© {new Date().getFullYear()} • Made with</span>
              <FaHeart className={`mx-1 inline-block ${
                darkMode ? 'text-primary-500' : 'text-primary-600'
              }`} />
              <span>by Marandu3</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-6 overflow-hidden">
        <svg 
          className={`absolute bottom-0 w-full h-16 ${
            darkMode ? 'text-dark-100 fill-current' : 'text-light-200 fill-current'
          }`} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            className={darkMode ? 'opacity-5' : 'opacity-10'}
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            className={darkMode ? 'opacity-5' : 'opacity-10'}
          ></path>
        </svg>
      </div>
    </footer>
  )
}

export default Footer