// ItemDetail.jsx
import React, { useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext.js'; // Adjusted path
import Header from '../Header'; // Assuming Header.jsx is in the parent directory
import '../styles/ItemDetail.css';

const ItemDetail = () => {
    const { id } = useParams(); // Get item ID from URL
    const { isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    // --- Placeholder Item Data ---
    // In a real application, you would fetch this data from an API
    const item = {
        id: id,
        title: "Elegant Silk Scarf",
        description: "A beautifully crafted silk scarf with intricate floral patterns. Perfect for adding a touch of elegance to any outfit. Made from 100% pure silk, soft to the touch. Minor imperfections consistent with gentle pre-loved wear.",
        images: [
            'https://images.unsplash.com/photo-1620703816227-f495513904a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1542838382-ed13a483a91e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1594917531776-92d6e49a2a78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        ],
        uploader: {
            name: "FashionCycle",
            id: "user456", // Uploader's user ID
        },
        category: "Accessories",
        type: "Scarf",
        size: "One Size",
        condition: "Excellent",
        tags: ["silk", "scarf", "elegant", "floral", "accessory"],
        availability: "Available",
        pointsCost: 180,
    };

    // Placeholder for "Previous Listings" - In a real app, this would be fetched based on uploader ID or related items
    const previousListings = [
        {
            id: 'prev1',
            name: 'Vintage Leather Belt',
            image: 'https://images.unsplash.com/photo-1611034407137-b84411130e10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            points: 90,
        },
        {
            id: 'prev2',
            name: 'Classic Sunglasses',
            image: 'https://images.unsplash.com/photo-1572635196232-ad942028448c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            points: 110,
        },
        {
            id: 'prev3',
            name: 'Knitted Beanie',
            image: 'https://images.unsplash.com/photo-1576871337037-82e753e161e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            points: 70,
        },
        {
            id: 'prev4',
            name: 'Stylish Watch',
            image: 'https://images.unsplash.com/photo-1523275335684-c64619674442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            points: 160,
        },
    ];
    // --- End Placeholder Item Data ---

    const [mainImage, setMainImage] = useState(item.images[0]);

    return (
        <div className="item-detail-page-wrapper">
            <Header />
            <div className="item-detail-container">
                <h1 className="item-detail-title">{item.title}</h1>

                <div className="item-detail-content-grid">
                    {/* Image Gallery */}
                    <div className="item-image-gallery">
                        <img
                            src={mainImage}
                            alt={item.title}
                            className="main-item-image"
                        />
                        <div className="thumbnail-gallery">
                            {item.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`${item.title} thumbnail ${index + 1}`}
                                    className={`thumbnail-image ${mainImage === img ? 'active' : ''}`}
                                    onClick={() => setMainImage(img)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Item Details and Actions */}
                    <div className="item-info-card">
                        <h2 className="info-card-section-title">Product Overview</h2>
                        <p className="item-description">{item.description}</p>

                        <div className="item-attributes">
                            <p><strong>Category:</strong> <span>{item.category}</span></p>
                            <p><strong>Type:</strong> <span>{item.type}</span></p>
                            <p><strong>Size:</strong> <span>{item.size}</span></p>
                            <p><strong>Condition:</strong> <span className="condition-status">{item.condition}</span></p>
                            <p><strong>Uploader:</strong> <Link to={`/user/${item.uploader.id}`} className="uploader-name">{item.uploader.name}</Link></p>
                            <p><strong>Availability:</strong> <span className={`availability-status ${item.availability === 'Available' ? 'available' : 'unavailable'}`}>{item.availability}</span></p>
                        </div>

                        {item.tags && item.tags.length > 0 && (
                            <div className="item-tags-section">
                                <h3 className="info-card-section-title">Tags</h3>
                                <div className="item-tags">
                                    {item.tags.map((tag, index) => (
                                        <span key={index} className="item-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {isAuthenticated ? (
                            <div className="item-actions">
                                <button className="action-button swap-button">Swap Request</button>
                                <button className="action-button redeem-button">Redeem for {item.pointsCost} Points</button>
                            </div>
                        ) : (
                            <p className="login-prompt">
                                <Link to="/login" className="login-link">Log in</Link> to swap or redeem this item.
                            </p>
                        )}
                    </div>
                </div>

                {/* Previous Listings / More from this Uploader Section */}
                <div className="previous-listings-section">
                    <h2 className="section-title">More from {item.uploader.name}</h2>
                    <div className="previous-listings-grid">
                        {previousListings.map((prevItem) => (
                            <div
                                key={prevItem.id}
                                className="prev-listing-card"
                                onClick={() => navigate(`/product/${prevItem.id}`)}
                            >
                                <img src={prevItem.image} alt={prevItem.name} />
                                <h3>{prevItem.name}</h3>
                                <p>Points: {prevItem.points}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
