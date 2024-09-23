// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode'; 
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState('');

    // Function to handle login and save the token
    const setAuth = (token) => {
        if (token) {
            const decodedToken = jwtDecode(token);
            setIsAuthenticated(true);
            setIsAdmin(decodedToken.isAdmin || false);
            localStorage.setItem('authToken', token); 
        } else {
            setIsAuthenticated(false);
            setIsAdmin(false);
            localStorage.removeItem('authToken');
        }
    };

    // Function to handle user registration
    const register = async (name, email, password) => {
        try {
            setLoading(true);
            const response = await axios.post('http://localhost:8080/api/auth/register', { name, email, password });
            const token = response.data.token;
            setAuth(token);
            setError('');
            return true;
        } catch (error) {
            setError(error.response?.data?.message || 'An error occurred during registration.');
            return false;
        } finally {
            setLoading(false);
        }
    };

    // Function to handle user login
    const login = async (email, password) => {
        try {
            setLoading(true);
            const response = await axios.post('http://localhost:8080/api/auth/login', { email, password });
            const token = response.data.token;
            setAuth(token);
            setError('');
            return true; 
        } catch (error) {
            setError(error.response?.data?.message || 'An error occurred during login.');
            return false;
        } finally {
            setLoading(false);
        }
    };

    // Function to handle user logout
    const logout = () => {
        setAuth(null);
        window.location.href = '/'; 
    };

    // Effect to check if user is already logged in on initial load
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setAuth(token);
        }
        setLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, isAdmin, register, login, logout, loading, error }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
