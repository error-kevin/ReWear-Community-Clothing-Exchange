import React from 'react';
import '../styles/LandingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-hero">
        <h1>Welcome to <span className="brand-name">ReWear</span></h1>
        <p className="tagline">Exchange clothes. Earn points. Save the planet 🌍</p>
        <div className="cta-buttons">
          <button onClick={() => navigate('/login')}>Start Swapping</button>
          <button onClick={() => navigate('/browse')}>Browse Items</button>
          <button onClick={() => navigate('/add-item')}>List an Item</button>
        </div>
      </div>

      <div className="featured-placeholder">
        <h2>🌟 Featured Items</h2>
        <p>Explore our featured items coming soon... 👕👗</p>
      </div>
    </div>
  );
};

export default LandingPage;
