import React, { createContext, useContext, useState, useEffect } from 'react';
import { STORAGE_KEY } from '../constant/keyComponent';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(STORAGE_KEY.USER_TOKEN);
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = React.useCallback((token) => {
    localStorage.setItem(STORAGE_KEY.USER_TOKEN, token);
    setIsAuthenticated(true);
  }, []);

  const logout = React.useCallback(() => {
    // localStorage.removeItem(STORAGE_KEY.USER_TOKEN);
    localStorage.clear();
    setIsAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
