// src/components/ProtectedRoute.jsx
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
    const navigate = useNavigate()
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : navigate('/login'); 
};

export default ProtectedRoute;
