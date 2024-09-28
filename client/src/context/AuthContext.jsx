import { createContext, useState, useEffect } from 'react';
import * as authService from '../services/authService';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast'; // Import Toaster and toast

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem('token');
      console.log('Token on load:', token); // Check token on initial load
      if (token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          authService.fetchUser()
              .then(userData => {
                  setUser(userData); // Set user data if token is valid
                  setLoading(false);
              })
              .catch((error) => {
                  console.error('Fetch user error:', error); // Log error
                  setLoading(false);
                  // Consider whether you want to remove the token here
                  // localStorage.removeItem('token'); 
                  // delete axios.defaults.headers.common['Authorization'];
              });
      } else {
          setLoading(false); // Just set loading to false if no token
      }
  }, []);
  

    const login = async (email, password) => {
        try {
            const { token, name, email: userEmail, isAdmin, message } = await authService.login(email, password);
            localStorage.setItem('token', token); 
            console.log('Token saved to localStorage:', localStorage.getItem('token'))
            setUser({ name, email: userEmail, isAdmin });
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            toast.success(message || 'Logged in successfully!');
            navigate('/');
            // Redirect based on user role
            // if (isAdmin) {
            //     navigate('/admin-dashboard');
            // } else {
            //     navigate('/');
            // }
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
        navigate('/login');
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
