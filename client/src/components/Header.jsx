// Header.jsx
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.js';
import './Header.css'; // Ensure this path is correct

const Header = () => {
    const { isAuthenticated, isAdmin, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); // Call the logout function from context
        navigate('/login'); // Redirect to login page after logout
    };

    return (
        <header className="rewear-header">
            <div className="header-left">
                <Link to="/" className="logo-link">
                    <h1>Rewear</h1>
                </Link>
            </div>
            <nav className="header-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/browse">Browse</Link></li>
                    {isAuthenticated ? (
                        <>
                            <li><Link to="/add-item">Add New Item</Link></li>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            {isAdmin && <li><Link to="/admin">Admin Panel</Link></li>}
                            <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
                        </>
                    ) : (
                        // Combined Login/Sign Up button
                        <li>
                            <button onClick={() => navigate('/login')} className="header-auth-combined-button">
                                Login / Sign Up
                            </button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;