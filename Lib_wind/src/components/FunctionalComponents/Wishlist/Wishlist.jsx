import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useWishlist } from '../../../context/WishlistContext';
import './Wishlist.css';

const Wishlist = () => {
  const navigate = useNavigate();
  const { wishlist, removeFromWishlist } = useWishlist();
  
  const handleQuickView = (bookId) => {
    navigate(`/quick-view/${bookId}`);
  };

  return (
    <div className="wishlist-container">
      <div className="wishlist-header">
        <h1>My Wishlist</h1>
        <p>Books you want to read in the future</p>
      </div>

      <div className="wishlist-grid">
        {wishlist.map(book => (
          <div key={book.id} className="wishlist-card">
            <div className="book-cover">
              <img src={book.cover} alt={book.title} loading="lazy" />
              <div className="book-overlay">
                <button 
                  className="quick-view-btn"
                  onClick={() => handleQuickView(book.id)}
                >
                  Quick View
                </button>
                {book.available && (
                  <button className="borrow-btn">
                    Borrow Now
                  </button>
                )}
                <button 
                  className="remove-btn"
                  onClick={() => removeFromWishlist(book.id)}
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
            <div className="book-info">
              <h3>{book.title}</h3>
              <p className="author">by {book.author}</p>
              <div className="book-details">
                <span className="rating">{'⭐'.repeat(Math.floor(book.rating))} {book.rating}</span>
                <span className="genre">{book.genre}</span>
              </div>
              <p className="description">{book.description}</p>
              <div className="availability-badge" data-available={book.available}>
                {book.available ? 'Available' : 'Not Available'}
              </div>
            </div>
          </div>
        ))}
      </div>

      {wishlist.length === 0 && (
        <div className="empty-wishlist">
          <h2>Your wishlist is empty</h2>
          <p>Browse our library and add books you'd like to read!</p>
          <button 
            className="browse-books-btn"
            onClick={() => navigate('/books')}
          >
            Browse Books
          </button>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
