import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Our Online Bookstore</h1>
        <p>Discover thousands of books across all genres</p>
        <Link to="/catalogue" className="cta-button">Browse Books</Link>
      </div>
      
      <div className="features">
        <div className="feature-card">
          <h3>📚 Wide Selection</h3>
          <p>Thousands of books across all genres</p>
        </div>
        <div className="feature-card">
          <h3>🚚 Fast Delivery</h3>
          <p>Quick and reliable shipping</p>
        </div>
        <div className="feature-card">
          <h3>💰 Best Prices</h3>
          <p>Competitive prices on all books</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
