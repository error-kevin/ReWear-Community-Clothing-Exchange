// src/pages/LoginPage.jsx
import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext.js'; // Adjusted path
import axios from 'axios'; // Import axios for API calls
import '../styles/AuthPages.css'; // Adjusted path

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors

        // Basic validation
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }

        try {
            // Make API call to login
            const response = await axios.post('http://localhost:5000/api/login', { username: email, password });
            const { access_token } = response.data;

            // Simulate user data from backend response
            const userData = {
                id: response.data.userId, // Assuming you return userId from backend
                email: email,
                username: response.data.username, // Assuming you return username from backend
                points: response.data.points, // Assuming you return points from backend
            };

            login(access_token, userData); // Call login from AuthContext
            navigate('/dashboard'); // Redirect to dashboard on successful login
        } catch (error) {
            setError('Invalid email or password.');
        }
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