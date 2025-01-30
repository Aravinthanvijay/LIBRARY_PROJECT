import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { useBorrow } from '../../../context/BorrowContext';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { borrowBook } = useBorrow();

  const featuredBooks = [
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
      id: 3,
      title: "Deep Work",
      author: "Cal Newport",
      cover: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg",
      rating: 4.5,
      genre: "Productivity",
      description: "Deep work is the ability to focus without distraction on a cognitively demanding task. It's a skill that allows you to quickly master complicated information and produce better results in less time.",
      available: true
    }
  ];

  const newArrivals = [
    {
      id: 1,
      title: "Iron Flame",
      author: "Rebecca Yarros",
      cover: "https://storage.googleapis.com/du-prd/books/images/9781649374172.jpg",
      date: "2025-01-25",
      genre: "Fantasy",
      description: "The much-anticipated sequel to Fourth Wing! As war grows more imminent with each passing day, Violet Sorrengail's path forward becomes increasingly unclear.",
      available: true
    },
    {
      id: 2,
      title: "The Heaven & Earth Grocery Store",
      author: "James McBride",
      cover: "https://storage.googleapis.com/du-prd/books/images/9780593422946.jpg",
      date: "2025-01-22",
      genre: "Historical Fiction",
      description: "From James McBride, author of the National Book Award-winning The Good Lord Bird, comes a wise and witty novel about what happens to the witnesses of a shooting.",
      available: true
    },
    {
      id: 3,
      title: "House of Flame and Shadow",
      author: "Sarah J. Maas",
      cover: "https://storage.googleapis.com/du-prd/books/images/9781635574104.jpg",
      date: "2025-01-15",
      genre: "Fantasy",
      description: "The stunning third book in the sexy, action-packed Crescent City series, following the global bestsellers House of Earth and Blood and House of Sky and Breath.",
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

  const handleQuickView = (bookId) => {
    const book = newArrivals.find(b => b.id === bookId);
    if (book) {
      // You can implement a modal or a quick view panel here
      console.log('Quick view for:', book.title);
    }
  };

  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1>Welcome to Our Library</h1>
        <p>Discover a world of knowledge with our extensive collection of books. From timeless classics to contemporary bestsellers, we have something for every reader.</p>
      </div>

      <div className="featured-books">
        <h2>Featured Books</h2>
        <div className="books-grid">
          {featuredBooks.map((book) => (
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

      <div className="new-arrivals">
        <h2>New Arrivals</h2>
        <p className="section-subtitle">Discover our latest additions to the library collection</p>
        <div className="new-arrivals-grid">
          {newArrivals.map((book) => (
            <div key={book.id} className="new-arrival-card">
              <div className="book-cover">
                <img 
                  src={book.cover} 
                  alt={book.title}
                  loading="lazy"
                />
                <div className="book-overlay">
                  <div className="overlay-top">
                    <span className="new-badge">New</span>
                    <span className="genre-badge">{book.genre}</span>
                  </div>
                </div>
              </div>
              <div className="book-info">
                <h3>{book.title}</h3>
                <p className="author">by {book.author}</p>
                <p className="arrival-date">Added {new Date(book.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}</p>
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
    </div>
  );
};

export default Home;
