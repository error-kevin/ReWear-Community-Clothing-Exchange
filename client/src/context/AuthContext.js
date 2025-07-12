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
        // This effect runs once when the component mounts
        // Here you would typically check for an existing token (e.g., in localStorage)
        // to see if the user is already logged in.
        const token = localStorage.getItem('authToken');
        const userData = localStorage.getItem('user');

        if (token && userData) {
            try {
                setUser(JSON.parse(userData));
                setIsAuthenticated(true);
            } catch (error) {
                console.error("Failed to parse user data from localStorage:", error);
                // Clear invalid data
                localStorage.removeItem('authToken');
                localStorage.removeItem('user');
                setIsAuthenticated(false);
                setUser(null);
            }
        }
        setLoading(false); // Set loading to false once initial check is done
    }, []);

    const login = async (token, userData) => {
        // Implement your login logic here
        // This is just an example of storing token and user data
        localStorage.setItem('authToken', token);
        localStorage.setItem('user', JSON.stringify(userData));
        setIsAuthenticated(true);
        setUser(userData);
        navigate('/dashboard'); // Redirect to dashboard after login
    };

    const logout = () => {
        // Implement your logout logic here
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        setUser(null);
        navigate('/login'); // Redirect to login page after logout
    };

    // The value provided to consumers of this context
    const authContextValue = {
        isAuthenticated,
        user,
        login,
        logout,
        loading // Expose loading state
    };

    // If you have an asynchronous check on mount (e.g., token validation),
    // you might want to render children only after loading is complete to avoid
    // components trying to use context values before they are set.
    if (loading) {
        return <div>Loading authentication...</div>; // Or a more sophisticated loading spinner
    }

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};