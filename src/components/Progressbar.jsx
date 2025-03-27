import React from 'react';
import { useTheme } from '../context/ThemeContext';

function Progressbar({ percentage }) {
  const { darkMode } = useTheme();
  
  return (
    <div className={`w-full h-2 ${darkMode ? 'bg-dark-300' : 'bg-light-300'} rounded-full overflow-hidden`}>
      <div 
        className={`h-full rounded-full transition-all duration-500 ease-out ${
          darkMode 
            ? 'bg-gradient-to-r from-primary-600 to-secondary-600' 
            : 'bg-gradient-to-r from-primary-500 to-secondary-500'
        }`}
        style={{ 
          width: `${percentage}%`,
          transition: 'width 1s ease-in-out'
        }}
      />
    </div>
  );
}
{/*required is progress bar iwe botttom */}
export default Progressbar;
