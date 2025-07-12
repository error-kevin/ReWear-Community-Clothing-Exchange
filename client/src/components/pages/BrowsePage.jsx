import React from 'react';
import '../styles/BrowsePage.css';

const BrowsePage = () => {
  // Dummy data for clothing items
  const items = [
    {
      id: 1,
      name: 'Stylish Denim Jacket',
      description: 'A trendy denim jacket perfect for casual outings.',
      price: '₹2,500',
      image: 'https://via.placeholder.com/150', // Replace with actual image URLs
    },
    {
      id: 2,
      name: 'Elegant Summer Dress',
      description: 'A beautiful summer dress for any occasion.',
      price: '₹1,800',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Classic White Sneakers',
      description: 'Comfortable and stylish sneakers for everyday wear.',
      price: '₹3,000',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Chic Handbag',
      description: 'A fashionable handbag to complement your outfit.',
      price: '₹2,200',
      image: 'https://via.placeholder.com/150',
    },
    // Add more items as needed
  ];

  return (
    <div className="browse-container">
      <h1>Browse Items</h1>
      <p>Discover a variety of clothing items available for exchange.</p>
      <div className="item-grid">
        {items.map(item => (
          <div className="item-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span>{item.price}</span>
            <button>Swap Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowsePage;
