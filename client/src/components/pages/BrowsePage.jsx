// BrowsePage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header'; // Assuming Header.jsx is in the same directory or adjust path
import '../styles/BrowsePage.css'; // Link to the new BrowsePage CSS file

// Sample product data (replace with actual data from a backend later)
const sampleProducts = [
    {
        id: '1',
        name: 'Classic Denim Jacket',
        image: 'https://images.unsplash.com/photo-1596702604853-bc27546a161f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        size: 'M',
        points: 150,
        category: 'mens',
        condition: 'Excellent',
        brand: 'Levi\'s',
    },
    {
        id: '2',
        name: 'Floral Summer Dress',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        size: 'S',
        points: 120,
        category: 'womens',
        condition: 'Good',
        brand: 'Zara',
    },
    {
        id: '3',
        name: 'Kids Graphic Tee',
        image: 'https://images.unsplash.com/photo-1594917531776-92d6e49a2a78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        size: '6-7Y',
        points: 80,
        category: 'kids',
        condition: 'Fair',
        brand: 'H&M',
    },
    {
        id: '4',
        name: 'Men\'s Formal Shirt',
        image: 'https://images.unsplash.com/photo-1621609100779-fe3a30c8e31a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        size: 'L',
        points: 100,
        category: 'mens',
        condition: 'Excellent',
        brand: 'Van Heusen',
    },
    {
        id: '5',
        name: 'Leather Handbag',
        image: 'https://images.unsplash.com/photo-1605733513597-a87f73998189?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        size: 'N/A',
        points: 200,
        category: 'accessories',
        condition: 'Good',
        brand: 'Coach',
    },
    {
        id: '6',
        name: 'Running Shoes',
        image: 'https://images.unsplash.com/photo-1542291026-79eddc8727ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        size: 'US 9',
        points: 180,
        category: 'footwear',
        condition: 'Excellent',
        brand: 'Nike',
    },
    {
        id: '7',
        name: 'Kids Winter Jacket',
        image: 'https://images.unsplash.com/photo-1589136159670-6819a5c8c5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        size: '8-9Y',
        points: 130,
        category: 'kids',
        condition: 'Excellent',
        brand: 'Columbia',
    },
    {
        id: '8',
        name: 'Elegant Evening Gown',
        image: 'https://images.unsplash.com/photo-1580927376043-39849220023e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        size: 'M',
        points: 250,
        category: 'dresses',
        condition: 'New',
        brand: 'Gucci',
    },
];

const BrowsePage = () => {
    const navigate = useNavigate();
    const [filters, setFilters] = useState({
        category: [],
        size: [],
        condition: [],
        minPoints: 0,
        maxPoints: 300, // Assuming a max point value for the slider
    });

    // Handle filter changes (e.g., checkbox, range slider)
    const handleFilterChange = (filterType, value) => {
        setFilters((prevFilters) => {
            if (Array.isArray(prevFilters[filterType])) {
                const newValues = prevFilters[filterType].includes(value)
                    ? prevFilters[filterType].filter((item) => item !== value)
                    : [...prevFilters[filterType], value];
                return { ...prevFilters, [filterType]: newValues };
            } else {
                return { ...prevFilters, [filterType]: value };
            }
        });
    };

    const clearFilters = () => {
        setFilters({
            category: [],
            size: [],
            condition: [],
            minPoints: 0,
            maxPoints: 300,
        });
    };

    // Simple filtering logic (can be expanded)
    const filteredProducts = sampleProducts.filter((product) => {
        const { category, size, condition, minPoints, maxPoints } = filters;

        if (category.length > 0 && !category.includes(product.category)) {
            return false;
        }
        if (size.length > 0 && !size.includes(product.size)) {
            return false;
        }
        if (condition.length > 0 && !condition.includes(product.condition)) {
            return false;
        }
        if (product.points < minPoints || product.points > maxPoints) {
            return false;
        }
        return true;
    });

    return (
        <div className="browse-container">
            <Header />

            {/* Browse Page Hero/Banner */}
            <div className="browse-hero">
                <h1>Explore Our Collection</h1>
                <p>Find your next favorite pre-loved item. Sustainable fashion awaits!</p>
            </div>

            <div className="browse-content">
                {/* Filter Sidebar */}
                <aside className="filter-sidebar">
                    <h3>Filters</h3>
                    <button className="clear-filters-btn" onClick={clearFilters}>Clear All Filters</button>

                    <div className="filter-group">
                        <h4>Category</h4>
                        {['mens', 'womens', 'kids', 'accessories', 'footwear', 'dresses'].map((cat) => (
                            <label key={cat} className="filter-checkbox">
                                <input
                                    type="checkbox"
                                    value={cat}
                                    checked={filters.category.includes(cat)}
                                    onChange={() => handleFilterChange('category', cat)}
                                />
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </label>
                        ))}
                    </div>

                    <div className="filter-group">
                        <h4>Size</h4>
                        {['XS', 'S', 'M', 'L', 'XL', 'XXL', '6-7Y', '8-9Y', 'US 9', 'N/A'].map((s) => (
                            <label key={s} className="filter-checkbox">
                                <input
                                    type="checkbox"
                                    value={s}
                                    checked={filters.size.includes(s)}
                                    onChange={() => handleFilterChange('size', s)}
                                />
                                {s}
                            </label>
                        ))}
                    </div>

                    <div className="filter-group">
                        <h4>Condition</h4>
                        {['New', 'Excellent', 'Good', 'Fair'].map((cond) => (
                            <label key={cond} className="filter-checkbox">
                                <input
                                    type="checkbox"
                                    value={cond}
                                    checked={filters.condition.includes(cond)}
                                    onChange={() => handleFilterChange('condition', cond)}
                                />
                                {cond}
                            </label>
                        ))}
                    </div>

                    <div className="filter-group">
                        <h4>Points Range</h4>
                        <div className="range-display">
                            <span>{filters.minPoints}</span> - <span>{filters.maxPoints}</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="300"
                            value={filters.minPoints}
                            onChange={(e) => handleFilterChange('minPoints', parseInt(e.target.value))}
                            className="range-slider"
                        />
                        <input
                            type="range"
                            min="0"
                            max="300"
                            value={filters.maxPoints}
                            onChange={(e) => handleFilterChange('maxPoints', parseInt(e.target.value))}
                            className="range-slider"
                        />
                    </div>
                </aside>

                {/* Product Listings */}
                <main className="product-listings-main">
                    <div className="product-grid">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="product-card"
                                    onClick={() => navigate(`/product/${product.id}`)}
                                >
                                    <img src={product.image} alt={product.name} />
                                    <h3>{product.name}</h3>
                                    <p>Size: {product.size}</p>
                                    <p>Condition: {product.condition}</p>
                                    <p className="product-points">Points: {product.points}</p>
                                </div>
                            ))
                        ) : (
                            <p className="no-products-message">No products found matching your filters.</p>
                        )}
                    </div>
                    {/* Basic Pagination Placeholder */}
                    {filteredProducts.length > 0 && (
                        <div className="pagination">
                            <button className="pagination-btn" disabled>Previous</button>
                            <span className="pagination-info">Page 1 of 1</span>
                            <button className="pagination-btn" disabled>Next</button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default BrowsePage;
