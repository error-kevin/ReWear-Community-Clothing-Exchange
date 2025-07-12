import React, { useState } from 'react';
import '../styles/LandingPage.css';
import { useNavigate } from 'react-router-dom';
import image from '../assets/image.png';
import Header from '../Header';
import { FaSearch } from 'react-icons/fa';

const carouselImages = [
    'https://images.unsplash.com/photo-1579547621455-84e0307c805a?auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1542838382-ed13a483a91e?auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1533965934149-14811a013444?auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1594917531776-92d6e49a2a78?auto=format&fit=crop&w=1470&q=80',
];

const allProducts = [
    {
        id: 1,
        name: "Denim Jacket",
        size: "M",
        points: 150,
        image: "https://images.unsplash.com/photo-1596702604853-bc27546a161f?auto=format&fit=crop&w=1470&q=80",
        slug: "denim-jacket-1"
    },
    {
        id: 2,
        name: "Summer Dress",
        size: "S",
        points: 120,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1470&q=80",
        slug: "summer-dress-2"
    },
    {
        id: 3,
        name: "Kids T-Shirt",
        size: "6-7Y",
        points: 80,
        image: "https://images.unsplash.com/photo-1594917531776-92d6e49a2a78?auto=format&fit=crop&w=1470&q=80",
        slug: "kids-tshirt-3"
    },
    {
        id: 4,
        name: "Formal Shirt",
        size: "L",
        points: 100,
        image: "https://images.unsplash.com/photo-1621609100779-fe3a30c8e31a?auto=format&fit=crop&w=1470&q=80",
        slug: "formal-shirt-4"
    }
];

const LandingPage = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    const nextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === carouselImages.length - 1 ? 0 : prevSlide + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? carouselImages.length - 1 : prevSlide - 1
        );
    };

    const filteredProducts = allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="landing-container">
            <Header />

            <div className="landing-hero">
                <h1>Welcome to <span className="brand-name">ReWear</span></h1>
                <p className="tagline">Exchange clothes. Earn points. Save the planet 🌍</p>
                <div className="cta-buttons">
                    <button onClick={() => navigate('/login')}>Start Swapping</button>
                    <button onClick={() => navigate('/browse')}>Browse Items</button>
                    <button onClick={() => navigate('/add-item')}>List an Item</button>
                </div>
            </div>

            {/* Search Bar and Banner */}
            <div className="search-banner-section">
                <div className="search-input-container">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search for clothes, categories, or brands..."
                        className="search-input"
                    />
                    <button className="search-button">
                        <FaSearch />
                    </button>
                </div>
                <div className="banner-image-container" onClick={() => navigate('/browse')}>
                    <img src={image} alt="Stylish people Browse clothes at a swap meet" className="banner-image" />
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

            {/* Product Listings */}
            <div className="product-listings-section">
                <h2>{searchTerm ? `Search Results for "${searchTerm}"` : "New Arrivals"}</h2>
                <div className="product-grid">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <div className="product-card" key={product.id} onClick={() => navigate(`/product/${product.slug}`)}>
                                <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p>Size: {product.size}</p>
                                <p>Points: {product.points}</p>
                            </div>
                        ))
                    ) : (
                        <p>No matching items found.</p>
                    )}
                </div>
            </div>

            {/* Featured Carousel */}
            <div className="featured-items-carousel-section">
                <h2>🌟 Featured Swaps</h2>
                <div className="carousel-container">
                    <button className="carousel-arrow left-arrow" onClick={prevSlide}>&#10094;</button>
                    <div className="carousel-images-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {carouselImages.map((src, index) => (
                            <img key={index} src={src} alt={`Featured Swap ${index + 1}`} className="carousel-image" />
                        ))}
                    </div>
                    <button className="carousel-arrow right-arrow" onClick={nextSlide}>&#10095;</button>
                    <div className="carousel-dots">
                        {carouselImages.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${currentSlide === index ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
