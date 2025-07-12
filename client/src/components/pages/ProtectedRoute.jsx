import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext.js'; // Adjusted path

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        // Redirect to the login page if not authenticated
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;