import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Make sure this CSS is updated

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="rewear-footer">
            <div className="footer-content">
                <div className="footer-section about-us">
                    <h3>About Rewear</h3>
                    <p>Promoting sustainable fashion through clothing swaps and reuse.</p>
                </div>

                <div className="footer-section quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                        <li><Link to="/terms">Terms of Service</Link></li>
                    </ul>
                </div>

                <div className="footer-section social-media">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} Rewear. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
