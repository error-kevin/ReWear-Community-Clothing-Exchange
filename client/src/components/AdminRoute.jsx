// src/components/AdminRoute.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Adjusted path

const AdminRoute = ({ children }) => {
    const { isAuthenticated, isAdmin } = useContext(AuthContext);

    if (!isAuthenticated || !isAdmin) {
        // Redirect to dashboard or home if not authenticated or not an admin
        // You could also redirect to a 403 Forbidden page
        return <Navigate to="/dashboard" replace />;
    }

    return children;
};

export default AdminRoute;