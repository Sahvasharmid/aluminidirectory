import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export const AuthContextProvider = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
const navigate=useNavigate();
  // Load auth data from localStorage when the app starts
  useEffect(() => {
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      const parsedAuth = JSON.parse(storedAuth);
      axios.defaults.headers.common['Authorization'] = `Bearer ${parsedAuth.token}`;
      setAuth({
        user: parsedAuth.loginresult,
        token: parsedAuth.token,
      });
      setIsRegistered(true);
      console.log('Authentication Token:', parsedAuth.token);
    }
  }, []);

  // Save auth to localStorage when it changes
  useEffect(() => {
    if (auth) {
      localStorage.setItem('auth', JSON.stringify(auth));
    }
  }, [auth]);

  // Logout function to clear the authentication data
  const logout = () => {
    setAuth(null);
    setIsRegistered(true);
    setIsLoginModalOpen(true);
    localStorage.removeItem('auth');
    axios.defaults.headers.common['Authorization'] = '';
    console.log('User logged out');
    navigate("/")
    
  };

  return (
    <AuthContextProvider.Provider value={{ auth, setAuth, isRegistered, setIsRegistered, logout ,isLoginModalOpen}}>
      {children}
    </AuthContextProvider.Provider>
  );
};
