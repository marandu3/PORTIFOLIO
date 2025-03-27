import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ img, title, description, technologies, githubLink, liveLink }) {
  const { darkMode } = useTheme();
  
  return (
    <div className="p-4">
      <div className={`flex flex-col h-full rounded-xl overflow-hidden shadow-xl ${darkMode ? 'bg-dark-100 shadow-primary-900/20' : 'bg-white shadow-gray-400/30'} transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl`}>
        <div className="relative overflow-hidden h-48 w-full">
          <img 
            src={img} 
            alt={title || "Project Image"}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-t from-dark-300/90 to-transparent' : 'bg-gradient-to-t from-gray-900/80 to-transparent'}`}></div>
        </div>
        
        <div className="p-5 flex-grow flex flex-col">
          <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-primary-400' : 'text-primary-600'}`}>
            {title || "Project Title"}
          </h3>
          
          <p className={`text-sm mb-4 flex-grow ${darkMode ? 'text-light-300' : 'text-gray-600'}`}>
            {description || "No description provided"}
          </p>
          
          {technologies && (
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-dark-300 text-secondary-400' : 'bg-light-200 text-secondary-600'}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          
          <div className="flex gap-3 mt-auto pt-3 border-t border-gray-700/20">
            {githubLink && (
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${darkMode ? 'bg-dark-300 text-light-100 hover:text-primary-400' : 'bg-light-200 text-gray-800 hover:text-primary-600'} transition-colors`}
              >
                <FaGithub size={18} />
              </a>
            )}
            
            {liveLink && (
              <a 
                href={liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${darkMode ? 'bg-dark-300 text-light-100 hover:text-primary-400' : 'bg-light-200 text-gray-800 hover:text-primary-600'} transition-colors`}
              >
                <FaExternalLinkAlt size={16} />
              </a>
            )}
            
            <button 
              onClick={() => window.open(liveLink || githubLink, '_blank')}
              className={`ml-auto px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                darkMode 
                  ? 'bg-gradient-to-r from-primary-700 to-secondary-700 text-white hover:from-primary-600 hover:to-secondary-600' 
                  : 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-400 hover:to-secondary-400'
              }`}
            >
              View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
