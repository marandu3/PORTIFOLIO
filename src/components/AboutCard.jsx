import React from 'react'
import Progressbar from './Progressbar'
import { useTheme } from '../context/ThemeContext'
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaCertificate } from 'react-icons/fa'

function AboutCard(props) {
  const { darkMode } = useTheme();

  return (
    <div className="p-4">
      <div className={`rounded-xl overflow-hidden shadow-xl h-full transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl ${
        darkMode 
          ? 'bg-gradient-to-br from-dark-100 to-dark-200 shadow-primary-900/20' 
          : 'bg-gradient-to-br from-white to-light-200 shadow-gray-400/30'
      }`}>
        <div className={`h-2 ${getEducationLevelColor(props.level, darkMode)}`}></div>
        
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-full ${
              darkMode ? 'bg-dark-300 text-primary-400' : 'bg-light-200 text-primary-600'
            }`}>
              <FaGraduationCap size={24} />
            </div>
            
            {props.percentage && (
              <div className="w-1/3">
                <Progressbar percentage={props.percentage} />
              </div>
            )}
          </div>
          
          <h3 className={`text-xl font-bold mb-4 ${
            darkMode ? 'text-primary-400' : 'text-primary-600'
          }`}>
            {props.level}
          </h3>
          
          <div className="space-y-2 flex-grow">
            <div className="flex items-center gap-2">
              <FaGraduationCap className={darkMode ? 'text-light-300' : 'text-gray-600'} />
              <p className={`${darkMode ? 'text-light-100' : 'text-gray-800'}`}>
                {props.school}
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className={darkMode ? 'text-light-300' : 'text-gray-600'} />
              <p className={`${darkMode ? 'text-light-100' : 'text-gray-800'}`}>
                {props.location}
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <FaCalendarAlt className={darkMode ? 'text-light-300' : 'text-gray-600'} />
              <p className={`${darkMode ? 'text-light-100' : 'text-gray-800'}`}>
                {props.finished}
              </p>
            </div>
            
            {props.course && (
              <p className={`mt-2 ${darkMode ? 'text-light-200' : 'text-gray-700'}`}>
                {props.course}
              </p>
            )}
          </div>
          
          {props.grade && (
            <div className={`mt-4 pt-4 border-t ${darkMode ? 'border-dark-300' : 'border-gray-200'} flex items-center gap-2`}>
              <FaCertificate className={`${
                darkMode ? 'text-secondary-400' : 'text-secondary-600'
              }`} />
              <span className={`font-medium ${
                darkMode ? 'text-secondary-400' : 'text-secondary-600'
              }`}>
                Grade: {props.grade}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Helper function to get color based on education level
function getEducationLevelColor(level, isDarkMode) {
  level = level?.toLowerCase() || '';
  
  if (level.includes('primary')) {
    return isDarkMode ? 'bg-blue-700' : 'bg-blue-500';
  } else if (level.includes('ordinary') || level.includes('secondary')) {
    return isDarkMode ? 'bg-green-700' : 'bg-green-500';
  } else if (level.includes('advanced')) {
    return isDarkMode ? 'bg-yellow-700' : 'bg-yellow-500';
  } else if (level.includes('undergraduate') || level.includes('university')) {
    return isDarkMode ? 'bg-purple-700' : 'bg-purple-500';
  } else if (level.includes('master')) {
    return isDarkMode ? 'bg-red-700' : 'bg-red-500';
  } else if (level.includes('phd') || level.includes('doctorate')) {
    return isDarkMode ? 'bg-pink-700' : 'bg-pink-500';
  }
  
  return isDarkMode ? 'bg-gray-700' : 'bg-gray-500';
}

export default AboutCard