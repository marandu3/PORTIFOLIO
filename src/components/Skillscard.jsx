import React from 'react'
import Progressbar from './Progressbar'
import { useTheme } from '../context/ThemeContext'
import { FaCode, FaDatabase, FaDesktop, FaPalette, FaLaptopCode, FaMobile } from 'react-icons/fa'

function Skillscard({ skill, percentage, category, description }) {
  const { darkMode } = useTheme();
  
  const getCategoryIcon = (category) => {
    const iconSize = 24;
    
    switch (category?.toLowerCase()) {
      case 'frontend':
        return <FaCode size={iconSize} />;
      case 'backend':
        return <FaDatabase size={iconSize} />;
      case 'ui/ux':
        return <FaPalette size={iconSize} />;
      case 'desktop':
        return <FaDesktop size={iconSize} />;
      case 'mobile':
        return <FaMobile size={iconSize} />;
      default:
        return <FaLaptopCode size={iconSize} />;
    }
  };
  
  const getCategoryColor = (category) => {
    if (!category) return darkMode ? 'bg-primary-700' : 'bg-primary-500';
    
    const cat = category.toLowerCase();
    if (cat.includes('front')) {
      return darkMode ? 'bg-blue-700' : 'bg-blue-500';
    } else if (cat.includes('back')) {
      return darkMode ? 'bg-green-700' : 'bg-green-500';
    } else if (cat.includes('ui') || cat.includes('ux') || cat.includes('design')) {
      return darkMode ? 'bg-pink-700' : 'bg-pink-500';
    } else if (cat.includes('mobile')) {
      return darkMode ? 'bg-orange-700' : 'bg-orange-500';
    } else if (cat.includes('desktop')) {
      return darkMode ? 'bg-purple-700' : 'bg-purple-500';
    }
    
    return darkMode ? 'bg-primary-700' : 'bg-primary-500';
  };

  return (
    <div className="p-4">
      <div className={`rounded-xl overflow-hidden shadow-xl h-full transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl ${
        darkMode 
          ? 'bg-gradient-to-br from-dark-100 to-dark-200 shadow-primary-900/20' 
          : 'bg-gradient-to-br from-white to-light-200 shadow-gray-400/30'
      }`}>
        <div className={`h-2 ${getCategoryColor(category)}`}></div>
        
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-full ${
              darkMode ? 'bg-dark-300 text-primary-400' : 'bg-light-200 text-primary-600'
            }`}>
              {getCategoryIcon(category)}
            </div>
            
            {category && (
              <span className={`text-xs px-3 py-1 rounded-full ${
                darkMode ? 'bg-dark-300 text-light-300' : 'bg-light-200 text-gray-700'
              }`}>
                {category}
              </span>
            )}
          </div>
          
          <h3 className={`text-xl font-bold mb-3 ${
            darkMode ? 'text-primary-400' : 'text-primary-600'
          }`}>
            {skill || "Skill Name"}
          </h3>
          
          {description && (
            <p className={`mb-4 text-sm ${darkMode ? 'text-light-300' : 'text-gray-600'}`}>
              {description}
            </p>
          )}
          
          <div className="mt-auto">
            <div className="flex justify-between items-center mb-2">
              <span className={`text-sm font-medium ${darkMode ? 'text-light-100' : 'text-gray-700'}`}>
                Proficiency
              </span>
              <span className={`text-sm font-medium ${darkMode ? 'text-light-100' : 'text-gray-700'}`}>
                {percentage || 0}%
              </span>
            </div>
            <Progressbar percentage={percentage || 0} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skillscard