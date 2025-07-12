import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.js'; 
import './Header.css'; 

const Header = () => {
    const { isAuthenticated, isAdmin, logout } = useContext(AuthContext); // Use useContext hook
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
                    <li><Link to="/browse">Browse</Link></li>
                    {isAuthenticated ? (
                        <>
                            <li><Link to="/add-item">Add New Item</Link></li>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            {isAdmin && <li><Link to="/admin">Admin Panel</Link></li>}
                            <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signup">Signup</Link></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;