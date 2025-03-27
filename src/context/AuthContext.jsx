import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(() => {
    const savedAdminStatus = localStorage.getItem('portfolio-admin');
    return savedAdminStatus === 'true';
  });
  
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginError, setLoginError] = useState('');
  
  // Admin credentials - in a real app, these would be securely stored on a server
  // For this demo, we're hardcoding them, but in production you'd use a proper authentication system
  const ADMIN_USERNAME = 'admin';
  const ADMIN_PASSWORD = 'portfolio2024';
  
  useEffect(() => {
    localStorage.setItem('portfolio-admin', isAdmin);
  }, [isAdmin]);
  
  const login = (username, password) => {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setLoginError('');
      setShowLoginModal(false);
      return true;
    } else {
      setLoginError('Invalid username or password');
      return false;
    }
  };
  
  const logout = () => {
    setIsAdmin(false);
  };
  
  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
    setLoginError('');
  };
  
  return (
    <AuthContext.Provider 
      value={{ 
        isAdmin, 
        login, 
        logout, 
        showLoginModal, 
        toggleLoginModal,
        loginError
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 