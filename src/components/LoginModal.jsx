import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { FaTimes, FaLock } from 'react-icons/fa';

function LoginModal() {
  const { showLoginModal, toggleLoginModal, login, loginError } = useAuth();
  const { darkMode } = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  if (!showLoginModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className={`rounded-lg shadow-lg overflow-hidden w-full max-w-md ${
        darkMode ? 'bg-dark-100 text-light-100' : 'bg-white text-gray-800'
      }`}>
        <div className={`p-4 flex justify-between items-center border-b ${
          darkMode ? 'border-dark-300' : 'border-gray-200'
        }`}>
          <div className="flex items-center gap-2">
            <FaLock className={darkMode ? 'text-primary-400' : 'text-primary-600'} />
            <h2 className="text-xl font-bold">Admin Login</h2>
          </div>
          <button 
            onClick={toggleLoginModal}
            className={`p-1 rounded-full ${
              darkMode 
                ? 'hover:bg-dark-300 text-light-300' 
                : 'hover:bg-gray-200 text-gray-600'
            }`}
          >
            <FaTimes size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-4">
            <label 
              htmlFor="username" 
              className={`block text-sm font-medium mb-2 ${
                darkMode ? 'text-light-200' : 'text-gray-700'
              }`}
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className={`w-full px-4 py-2 rounded-md border ${
                darkMode 
                  ? 'bg-dark-300 border-dark-100 text-light-100' 
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-primary-500`}
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-6">
            <label 
              htmlFor="password" 
              className={`block text-sm font-medium mb-2 ${
                darkMode ? 'text-light-200' : 'text-gray-700'
              }`}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={`w-full px-4 py-2 rounded-md border ${
                darkMode 
                  ? 'bg-dark-300 border-dark-100 text-light-100' 
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-primary-500`}
              placeholder="Enter your password"
            />
          </div>

          {loginError && (
            <div className="mb-4 p-2 rounded bg-red-100 text-red-700 text-sm">
              {loginError}
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="button"
              onClick={toggleLoginModal}
              className={`px-4 py-2 mr-2 rounded-md ${
                darkMode 
                  ? 'text-light-100 bg-dark-300 hover:bg-dark-200' 
                  : 'text-gray-700 bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`px-6 py-2 rounded-md transition-colors ${
                darkMode 
                  ? 'bg-gradient-to-r from-primary-700 to-secondary-700 text-white hover:from-primary-600 hover:to-secondary-600' 
                  : 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-400 hover:to-secondary-400'
              }`}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginModal; 