// src/components/ProtectedRoute.jsx
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
    const navigate = useNavigate()
  const { isAuthenticated } = useAuth(); // Get authentication status from context

  return isAuthenticated ? <Outlet /> : navigate('/login'); // Redirect to login if not authenticated
};

export default ProtectedRoute;
