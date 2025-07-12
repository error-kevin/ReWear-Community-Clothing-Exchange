// src/pages/SignupPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/AuthPages.css'; // Adjusted path

const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Basic validation
        if (!username || !email || !password || !confirmPassword) {
            setError('All fields are required.');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        // --- Simulate API call for signup ---
        console.log('Attempting to sign up with:', { username, email, password });

        setTimeout(() => {
            setSuccess('Account created successfully! Redirecting to login...');
            setTimeout(() => {
                navigate('/login');
            }, 2000); // Redirect after 2 seconds
        }, 1000); // Wait for 1 second before showing success message
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Sign Up for Rewear</h2>
                <form onSubmit={handleSubmit}>
                    {error && <p className="error-message">{error}</p>}
                    {success && <p className="success-message">{success}</p>}
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            placeholder="Choose a username"
                        />
                    </div>
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
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            placeholder="********"
                        />
                    </div>
                    <button type="submit" className="auth-button">Sign Up</button>
                </form>
                <p className="auth-switch">
                    Already have an account? <Link to="/login">Log In</Link>
                </p>
            </div>
        </div>
    );
};

export default SignupPage;
