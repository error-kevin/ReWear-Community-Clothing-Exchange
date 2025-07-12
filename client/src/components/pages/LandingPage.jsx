// LandingPage.jsx
import React from 'react';
import '../styles/LandingPage.css';
import { useNavigate } from 'react-router-dom';
import  image from '../assets/image.png';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <div className="landing-hero">
        <h1>Welcome to <span className="brand-name">ReWear</span></h1>
        <p className="tagline">Exchange clothes. Earn points. Save the planet 🌍</p>
        <div className="cta-buttons">
          <button onClick={() => navigate('/login')}>Start Swapping</button>
          <button onClick={() => navigate('/browse')}>Browse Items</button>
          <button onClick={() => navigate('/add-item')}>Add New Item</button>
        </div>
      </div>

      {/* Search Bar and Banner */}
      <div className="search-banner-section">
        <div className="search-input-container">
          <input type="text" placeholder="Search for clothes, categories, or brands..." className="search-input" />
          <button className="search-button">🔍</button>
        </div>
        {/* Clickable Banner Image */}
        <div className="banner-image-container" onClick={() => navigate('/browse')}>
            <img src={image} alt="Stylish people browsing clothes at a swap meet" className="banner-image" />
        </div>
      </div>

      {/* Categories Section */}
      <div className="categories-section">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <div className="category-card" onClick={() => navigate('/browse?category=mens')}>Mens</div>
          <div className="category-card" onClick={() => navigate('/browse?category=womens')}>Womens</div>
          <div className="category-card" onClick={() => navigate('/browse?category=kids')}>Kids</div>
          <div className="category-card" onClick={() => navigate('/browse?category=accessories')}>Accessories</div>
          <div className="category-card" onClick={() => navigate('/browse?category=footwear')}>Footwear</div>
          <div className="category-card" onClick={() => navigate('/browse?category=dresses')}>Dresses</div>
        </div>
      </div>

      {/* Product Listings Section */}
      <div className="product-listings-section">
        <h2>New Arrivals</h2>
        <div className="product-grid">
          {/* Clickable Product Card 1 */}
          <div className="product-card" onClick={() => navigate('/product/denim-jacket-1')}>
            <img src="https://images.unsplash.com/photo-1596702604853-bc27546a161f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Denim Jacket" />
            <h3>Denim Jacket</h3>
            <p>Size: M</p>
            <p>Points: 150</p>
          </div>
          {/* Clickable Product Card 2 */}
          <div className="product-card" onClick={() => navigate('/product/summer-dress-2')}>
            <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Summer Dress" />
            <h3>Summer Dress</h3>
            <p>Size: S</p>
            <p>Points: 120</p>
          </div>
          {/* Clickable Product Card 3 */}
          <div className="product-card" onClick={() => navigate('/product/kids-tshirt-3')}>
            <img src="https://images.unsplash.com/photo-1594917531776-92d6e49a2a78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Kids T-Shirt" />
            <h3>Kids T-Shirt</h3>
            <p>Size: 6-7Y</p>
            <p>Points: 80</p>
          </div>
          {/* Clickable Product Card 4 */}
          <div className="product-card" onClick={() => navigate('/product/formal-shirt-4')}>
            <img src="https://images.unsplash.com/photo-1621609100779-fe3a30c8e31a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Formal Shirt" />
            <h3>Formal Shirt</h3>
            <p>Size: L</p>
            <p>Points: 100</p>
          </div>
        </div>
      </div>

      {/* Featured Items (original placeholder modified) */}
      <div className="featured-placeholder">
        <h2>🌟 Featured Swaps</h2>
        <p>Discover unique pre-loved treasures! 👕👗</p>
      </div>
    </div>
  );
};

export default LandingPage;