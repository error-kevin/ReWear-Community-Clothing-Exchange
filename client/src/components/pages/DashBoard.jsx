import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext.js'; // Adjusted path
import '../styles/DashBoard.css'; // New import for Dashboard styles
const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [quickNote, setQuickNote] = useState('');

    // Dummy data for listings and purchases - replace with actual data from your backend
    const myListings = [
        { id: 1, name: 'Vintage Leather Jacket', status: 'Active', imageUrl: 'https://via.placeholder.com/150/FFC107/FFFFFF?text=Jacket' },
        { id: 2, name: 'Designer Handbag', status: 'Pending Swap', imageUrl: 'https://via.placeholder.com/150/9C27B0/FFFFFF?text=Handbag' },
        { id: 3, name: 'Classic Sneakers', status: 'Swapped', imageUrl: 'https://via.placeholder.com/150/2196F3/FFFFFF?text=Sneakers' },
        { id: 4, name: 'Woolen Scarf', status: 'Active', imageUrl: 'https://via.placeholder.com/150/4CAF50/FFFFFF?text=Scarf' },
    ];

    const myPurchases = [
        { id: 101, name: 'Blue Denim Shirt', status: 'Delivered', imageUrl: 'https://via.placeholder.com5/50/FFC107/FFFFFF?text=Shirt' },
        { id: 102, name: 'Striped T-shirt', status: 'In Transit', imageUrl: 'https://via.placeholder.com/150/9C27B0/FFFFFF?text=T-shirt' },
    ];

    const handleQuickNoteChange = (e) => {
        setQuickNote(e.target.value);
    };

    const saveQuickNote = () => {
        // Here you would typically send the quickNote to your backend
        console.log("Saving quick note:", quickNote);
        alert("Quick note saved! (functionality to be implemented with backend)");
    };

    if (!user) {
        return <div className="dashboard-loading">Loading user data...</div>;
    }

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">
                Welcome, {user.username || user.email}! 👋
            </h1>

            <div className="dashboard-header-section">
                {/* Profile Details & Points Balance */}
                <div className="profile-details-card">
                    <div className="profile-avatar-wrapper">
                        <img 
                            src={user.avatar || 'https://via.placeholder.com/100/4CAF50/FFFFFF?text=User'} 
                            alt="User Avatar" 
                            className="profile-avatar" 
                        />
                    </div>
                    <div className="profile-info">
                        <h2 className="card-title">{user.username || 'User'}</h2>
                        <p className="card-text"><strong>Email:</strong> {user.email}</p>
                        <p className="card-text"><strong>Points Balance:</strong> <span className="points-balance">{user.points || 0} ✨</span></p>
                        <button className="card-button primary-button">Edit Profile</button>
                    </div>
                </div>

                {/* Quick Note Input */}
                <div className="quick-note-card">
                    <h2 className="card-title">Quick Note ✍️</h2>
                    <textarea
                        className="quick-note-textarea"
                        placeholder="Jot down a quick thought or reminder..."
                        value={quickNote}
                        onChange={handleQuickNoteChange}
                    ></textarea>
                    <button 
                        className="card-button secondary-button" 
                        onClick={saveQuickNote}
                        disabled={!quickNote.trim()}
                    >
                        Save Note
                    </button>
                </div>
            </div>

            <hr className="divider" />

            {/* My Listings Section */}
            <div className="dashboard-section">
                <h2 className="section-title">My Listings 📦</h2>
                <div className="item-grid">
                    {myListings.length > 0 ? (
                        myListings.map(item => (
                            <div key={item.id} className="item-card">
                                <img src={item.imageUrl} alt={item.name} className="item-image" />
                                <div className="item-info">
                                    <h3 className="item-name">{item.name}</h3>
                                    <span className={`item-status ${item.status.toLowerCase().replace(/\s/g, '-')}`}>{item.status}</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-items-message">You haven't listed any items yet. Start swapping! 🚀</p>
                    )}
                </div>
                {myListings.length > 0 && (
                    <button className="section-button tertiary-button">View All My Listings</button>
                )}
            </div>

            <hr className="divider" />

            {/* My Purchases/Swaps Section */}
            <div className="dashboard-section">
                <h2 className="section-title">My Purchases/Swaps 🤝</h2>
                <div className="item-grid">
                    {myPurchases.length > 0 ? (
                        myPurchases.map(item => (
                            <div key={item.id} className="item-card">
                                <img src={item.imageUrl} alt={item.name} className="item-image" />
                                <div className="item-info">
                                    <h3 className="item-name">{item.name}</h3>
                                    <span className={`item-status ${item.status.toLowerCase().replace(/\s/g, '-')}`}>{item.status}</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-items-message">You haven't made any purchases or swaps yet. Find something you like! 🛍️</p>
                    )}
                </div>
                {myPurchases.length > 0 && (
                    <button className="section-button primary-button">View All My Purchases</button>
                )}
            </div>
        </div>
    );
};

export default Dashboard;