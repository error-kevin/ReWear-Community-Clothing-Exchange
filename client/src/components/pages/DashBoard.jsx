// src/pages/Dashboard.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.js'; // Adjusted path
import '../styles/DashBoard.css'; // New import for Dashboard styles

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <div className="dashboard-loading">Loading user data...</div>;
    }

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">
                Welcome, {user.username || user.email}!
            </h1>

            <div className="dashboard-grid">
                {/* Profile Details & Points Balance */}
                <div className="dashboard-card profile-card">
                    <h2 className="card-title">Your Profile</h2>
                    <p className="card-text"><strong>Email:</strong> {user.email}</p>
                    <p className="card-text"><strong>Points Balance:</strong> <span className="points-balance">{user.points || 0}</span></p>
                    <button className="card-button primary-button">Edit Profile</button>
                </div>

                {/* Uploaded Items Overview */}
                <div className="dashboard-card items-card">
                    <h2 className="card-title">Your Items</h2>
                    <ul className="item-list">
                        <li>Blue Denim Jacket <span className="item-status">Active</span></li>
                        <li>Summer Dress <span className="item-status">Pending Swap</span></li>
                        <li>Sneakers <span className="item-status">Swapped</span></li>
                    </ul>
                    <button className="card-button secondary-button">View All Items</button>
                </div>

                {/* Ongoing and Completed Swaps List */}
                <div className="dashboard-card swaps-card">
                    <h2 className="card-title">Your Swaps</h2>
                    <ul className="swap-list">
                        <li>Swap for Red Scarf <span className="swap-status">Ongoing</span></li>
                        <li>Swap for Winter Coat <span className="swap-status">Completed</span></li>
                    </ul>
                    <button className="card-button tertiary-button">View All Swaps</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
