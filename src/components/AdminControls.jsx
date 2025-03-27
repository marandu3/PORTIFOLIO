import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { FaLock, FaUnlock, FaPlus, FaEdit, FaTrash, FaTimes } from 'react-icons/fa';

function AdminControls({ 
  onAdd, 
  showAddForm, 
  allowDelete = true,
  allowEdit = false,
  onEdit,
  itemType = "item"
}) {
  const { isAdmin, toggleLoginModal, logout } = useAuth();
  const { darkMode } = useTheme();

  return (
    <div className={`flex flex-wrap justify-between items-center mb-8 rounded-lg p-3 ${
      darkMode 
        ? 'bg-dark-100 shadow-primary-900/20' 
        : 'bg-light-200 shadow-gray-400/30'
    } shadow-lg`}>
      <div className="flex items-center gap-2">
        {isAdmin ? (
          <>
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${
              darkMode 
                ? 'bg-green-900/50 text-green-400' 
                : 'bg-green-100 text-green-700'
            }`}>
              <FaUnlock size={12} />
              <span className="text-sm font-medium">Admin Mode</span>
            </div>
            <button
              onClick={logout}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                darkMode 
                  ? 'bg-dark-300 text-light-300 hover:bg-dark-200' 
                  : 'bg-light-300 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={toggleLoginModal}
            className={`flex items-center gap-2 px-3 py-1 rounded-md transition-colors ${
              darkMode 
                ? 'bg-dark-300 text-light-100 hover:bg-dark-200' 
                : 'bg-light-300 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <FaLock size={12} />
            <span className="text-sm">Admin Login</span>
          </button>
        )}
      </div>
      
      {isAdmin && (
        <div className="flex items-center gap-2 mt-2 sm:mt-0">
          {allowEdit && (
            <button
              onClick={onEdit}
              className={`flex items-center gap-2 px-3 py-1 rounded-md ${
                darkMode 
                  ? 'bg-blue-700 text-white hover:bg-blue-600' 
                  : 'bg-blue-600 text-white hover:bg-blue-500'
              }`}
            >
              <FaEdit size={14} />
              <span className="text-sm">Edit {itemType}</span>
            </button>
          )}
          
          <button
            onClick={onAdd}
            className={`flex items-center gap-2 px-3 py-1 rounded-md ${
              darkMode 
                ? (showAddForm ? 'bg-red-700 hover:bg-red-600' : 'bg-primary-700 hover:bg-primary-600')
                : (showAddForm ? 'bg-red-600 hover:bg-red-500' : 'bg-primary-600 hover:bg-primary-500')
            } text-white`}
          >
            {showAddForm ? (
              <>
                <FaTimes size={14} />
                <span className="text-sm">Cancel</span>
              </>
            ) : (
              <>
                <FaPlus size={14} />
                <span className="text-sm">Add {itemType}</span>
              </>
            )}
          </button>
          
          {allowDelete && (
            <div className={`${
              darkMode ? 'text-light-300' : 'text-gray-600'
            } text-sm ml-4 italic`}>
              <FaTrash size={12} className="inline mr-1" />
              <span>Hover items to delete</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AdminControls; 