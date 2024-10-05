// src/components/PrivateRoute.js

import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({ children, roleRequired }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) return <p>Loading...</p>;

    if (roleRequired === 'isAdmin' && user?.isAdmin) {
        return children; // Allow access if user is admin
    }

    return <Navigate to="/" replace />; // Redirect if not authorized
};

export default PrivateRoute;
