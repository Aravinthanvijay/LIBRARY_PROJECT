import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { useBorrow } from '../../../context/BorrowContext';
import './Books.css';

const Books = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { borrowBook } = useBorrow();

  const books = [
    {
      id: 1,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      cover: "https://m.media-amazon.com/images/I/71TRUbzcvaL._AC_UF1000,1000_QL80_.jpg",
      rating: 4.6,
      genre: "Finance",
      description: "Timeless lessons on wealth, greed, and happiness doing well with money isn't necessarily about what you know. It's about how you behave. And behavior is hard to teach, even to really smart people.",
      available: true
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      cover: "https://m.media-amazon.com/images/I/81bGKUa1e0L._AC_UF1000,1000_QL80_.jpg",
      rating: 4.8,
      genre: "Self-Help",
      description: "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
      available: true
    },
    {
      id: 4,
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      cover: "https://m.media-amazon.com/images/I/71UypkUjStL._AC_UF1000,1000_QL80_.jpg",
      rating: 4.7,
      genre: "Self-Help",
      description: "Think and Grow Rich has been called the 'Granddaddy of All Motivational Literature.' It was the first book to boldly ask, 'What makes a winner?' The man who asked and listened for the answer, Napoleon Hill, is now counted in the top ranks of the world's winners himself.",
      available: true
    }
  ];

  const handleBorrow = (book) => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    borrowBook(book);
    navigate('/borrow-history');
  };

  return (
    <div className="books-container">
      <h1>All Books</h1>
      <div className="books-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <div className="book-cover">
              <img src={book.cover} alt={book.title} />
            </div>
            <div className="book-info">
              <h3>{book.title}</h3>
              <p className="author">by {book.author}</p>
              <div className="book-details">
                <span className="rating">★ {book.rating}</span>
                <span className="genre">{book.genre}</span>
              </div>
              <p className="description">{book.description}</p>
              <div className="book-actions">
                <span 
                  className="availability-badge"
                  data-available={book.available}
                >
                  {book.available ? 'Available' : 'Not Available'}
                </span>
                <button
                  className="borrow-btn"
                  onClick={() => handleBorrow(book)}
                >
                  Borrow Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
