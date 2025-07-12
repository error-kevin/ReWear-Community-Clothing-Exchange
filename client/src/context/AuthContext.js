// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Create the Auth Context
export const AuthContext = createContext(null); // Initialize with null or a default shape

// Create the Auth Provider Component
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Add a loading state
    const navigate = useNavigate(); // For redirection after login/logout

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        const userData = localStorage.getItem('user');

        if (token && userData) {
            try {
                setUser(JSON.parse(userData));
                setIsAuthenticated(true);
            } catch (error) {
                console.error("Failed to parse user data from localStorage:", error);
                localStorage.removeItem('authToken');
                localStorage.removeItem('user');
                setIsAuthenticated(false);
                setUser(null);
            }
        }
        setLoading(false); // Set loading to false once initial check is done
    }, []);

    const login = (userData, adminStatus) => {
        const token = 'dummy_token'; // Replace with actual token from API
        localStorage.setItem('authToken', token);
        localStorage.setItem('user', JSON.stringify(userData));
        setIsAuthenticated(true);
        setUser(userData);
        navigate('/dashboard'); // Redirect to dashboard after login
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        setUser(null);
        navigate('/login'); // Redirect to login page after logout
    };

    const authContextValue = {
        isAuthenticated,
        user,
        login,
        logout,
        loading // Expose loading state
    };

    if (loading) {
        return <div>Loading authentication...</div>; // Or a more sophisticated loading spinner
    }

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};
