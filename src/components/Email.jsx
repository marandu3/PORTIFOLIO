import React from 'react'
import Footer from './Footer'
import { useTheme } from '../context/ThemeContext'

function Email() {
  const { darkMode } = useTheme();
  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-dark-200' : 'bg-light-100'} transition-colors duration-300`}>
      <div className="container mx-auto py-8 px-4">
        <h2 className={`text-4xl font-bold mb-6 text-center ${darkMode ? 'text-light-100' : 'text-gray-800'}`}>
          Email Contact
        </h2>
        <div className="flex justify-center">
          <div className={`max-w-lg w-full p-6 rounded-lg shadow-lg ${
            darkMode ? 'bg-dark-100 text-light-100' : 'bg-white text-gray-800'
          }`}>
            <p className="mb-4">You can reach me directly at:</p>
            <a 
              href="mailto:johnwillymarandu@gmail.com"
              className={`text-xl font-medium ${
                darkMode ? 'text-primary-400 hover:text-primary-300' : 'text-primary-600 hover:text-primary-500'
              } transition-colors`}
            >
              johnwillymarandu@gmail.com
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Email