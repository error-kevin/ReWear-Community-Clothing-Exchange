import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="rewear-footer">
      <div className="footer-content">
        <div className="footer-section about-us">
          <h3>About ReWear</h3>
          <p>
            ReWear is a sustainable clothing exchange platform where fashion meets purpose. Swap, share, and save the planet — one outfit at a time.
          </p>
        </div>

        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/browse">Browse</Link></li>
            <li><Link to="/add-item">List an Item</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/terms">Terms</Link></li>
          </ul>
        </div>

        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} ReWear. All rights reserved. | Crafted with ❤️ for a sustainable future</p>
      </div>
    </footer>
  );
};

export default Footer;
