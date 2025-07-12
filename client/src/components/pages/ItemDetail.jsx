import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext.js'; // Adjusted path
import '../styles/ItemDetail.css'; 

const ItemDetail = () => {
    const { id } = useParams(); // Get item ID from URL
    const { isAuthenticated } = useContext(AuthContext);

    // --- Placeholder Item Data ---
    const item = {
        id: id,
        title: "Vintage Denim Jacket",
        description: "Classic blue denim jacket, perfect for all seasons. Well-preserved vintage piece with minor wear and tear, adding to its character. Size M, unisex.",
        images: [
            `https://placehold.co/600x400/E0F2F7/000000?text=Jacket+Front`,
            `https://placehold.co/600x400/D1EEF5/000000?text=Jacket+Back`,
            `https://placehold.co/600x400/C2E9F0/000000?text=Jacket+Detail`,
        ],
        uploader: {
            name: "EcoSwapper99",
            id: "user123", // Uploader's user ID
        },
        category: "Outerwear",
        type: "Jacket",
        size: "M",
        condition: "Good (Vintage)",
        tags: ["denim", "vintage", "jacket", "casual", "unisex"],
        availability: "Available",
        pointsCost: 200,
    };
    // --- End Placeholder Item Data ---

    return (
        <div className="item-detail-container">
            <h1 className="item-detail-title">{item.title}</h1>

            <div className="item-detail-content">
                {/* Image Gallery */}
                <div className="item-image-gallery">
                    <img
                        src={item.images[0]}
                        alt={item.title}
                        className="main-item-image"
                    />
                    <div className="thumbnail-gallery">
                        {item.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`${item.title} thumbnail ${index + 1}`}
                                className="thumbnail-image"
                            />
                        ))}
                    </div>
                </div>

                {/* Item Details and Actions */}
                <div className="item-info-card">
                    <h2 className="info-card-title">Description</h2>
                    <p className="item-description">{item.description}</p>

                    <div className="item-attributes">
                        <p><strong>Category:</strong> {item.category}</p>
                        <p><strong>Type:</strong> {item.type}</p>
                        <p><strong>Size:</strong> {item.size}</p>
                        <p><strong>Condition:</strong> {item.condition}</p>
                        <p><strong>Uploader:</strong> <span className="uploader-name">{item.uploader.name}</span></p>
                        <p><strong>Availability:</strong> <span className={`availability-status ${item.availability === 'Available' ? 'available' : 'unavailable'}`}>{item.availability}</span></p>
                    </div>

                    {item.tags && item.tags.length > 0 && (
                        <div className="item-tags-section">
                            <h3 className="tags-title">Tags:</h3>
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
        </div>
    );
};

export default ItemDetail;