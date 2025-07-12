// src/pages/LoginPage.jsx
import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext.js'; // Adjusted path
import '../styles/AuthPages.css'; // Adjusted path

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors

        // Basic validation
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }

        // --- Simulate API call for login ---
        console.log('Attempting to log in with:', { email, password });

        // Simulate a successful login after a delay
        setTimeout(() => {
            if (email === 'test@example.com' && password === '123') {
                // Simulate user data and admin status from backend response
                const userData = {
                    id: 'user123',
                    email: email,
                    username: 'TestUser',
                    points: 150,
                };
                const adminStatus = false; // Set to true for admin login simulation

                login(userData, adminStatus); // Call login from AuthContext
                navigate('/dashboard'); // Redirect to dashboard on successful login
            } else if (email === 'admin@example.com' && password === 'admin123') {
                 const userData = {
                    id: 'admin456',
                    email: email,
                    username: 'AdminUser',
                    role: 'admin',
                };
                login(userData, true); // Log in as admin
                navigate('/admin'); // Redirect to admin panel
            }
            else {
                setError('Invalid email or password.');
            }
        }, 1000);
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Login to Rewear</h2>
                <form onSubmit={handleSubmit}>
                    {error && <p className="error-message">{error}</p>}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="your@example.com"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="********"
                        />
                    </div>
                    <button type="submit" className="auth-button">Log In</button>
                </form>
                <p className="auth-switch">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;