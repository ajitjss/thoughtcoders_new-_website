import { createContext, useState, useEffect } from 'react';
import * as authService from '../services/authService';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast'; 

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          authService.fetchUser()
              .then(userData => {
                  setUser(userData); 
                  setLoading(false);
              })
              .catch((error) => {
                  console.error('Fetch user error:', error);
                  setLoading(false);
              });
      } else {
          setLoading(false); 
      }
  }, []);
  

    const login = async (email, password) => {
        try {
            const { token, name, email: userEmail, isAdmin, message } = await authService.login(email, password);
            localStorage.setItem('token', token); 
            setUser({ name, email: userEmail, isAdmin });
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            toast.success(message || 'Logged in successfully!');
            navigate('/');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to login. Please check your credentials.');
        }
    };

    const register = async (name, email, password, confirmPassword) => {
        try {
            const response = await authService.register(name, email, password, confirmPassword);
            toast.success(response.message || 'Registration successful!');
            navigate('/login');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Registration failed. Please try again.');
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
        setUser(null);
        // navigate('/login');
        toast.success('Logged out successfully.');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
            <Toaster position="top-center" reverseOrder={false} />
        </AuthContext.Provider>
    );
};

export default AuthContext;
