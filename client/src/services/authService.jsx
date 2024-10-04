// src/services/authService.js

import axios from 'axios';
import { config } from '../config';

const API_URL = `${config.BASE_URL}/api/auth`;

export const register = async (name, email, password, confirmPassword) => {
    const response = await axios.post(`${API_URL}/register`, { name, email, password, confirmPassword });
    return response.data;
};

export const login = async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
};

export const logout = () => {
    // No API call required for logout as it's handled on the client side
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
};

export const fetchUser = async () => {
    const response = await axios.get(`${API_URL}/me`);
    return response.data;
};
