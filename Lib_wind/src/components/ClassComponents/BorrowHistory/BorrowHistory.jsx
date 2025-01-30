 import React from 'react';
import { useBorrow } from '../../../context/BorrowContext';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './BorrowHistory.css';

const BorrowHistory = () => {
  const { borrowedBooks, returnedBooks, returnBook } = useBorrow();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return (
      <div className="borrow-history-container">
        <div className="auth-required">
          <h2>Authentication Required</h2>
          <p>Please log in to view your borrow history.</p>
          <button 
            className="auth-button"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="borrow-history-container">
      <div className="section">
        <h2>Currently Borrowed Books</h2>
        <div className="books-grid">
          {borrowedBooks.map(book => (
            <div key={book.id} className="book-card">
              <div className="book-cover">
                <img src={book.cover} alt={book.title} loading="lazy" />
              </div>
              <div className="book-info">
                <h3>{book.title}</h3>
                <p className="author">by {book.author}</p>
                <div className="borrow-details">
                  <p>Borrowed: {new Date(book.borrowDate).toLocaleDateString()}</p>
                  <p>Due: {new Date(book.dueDate).toLocaleDateString()}</p>
                </div>
                <button 
                  className="return-button"
                  onClick={() => returnBook(book.id)}
                >
                  Return Book
                </button>
              </div>
            </div>
          ))}
          {borrowedBooks.length === 0 && (
            <div className="empty-message">
              <p>You haven't borrowed any books yet.</p>
            </div>
          )}
        </div>
      </div>

      <div className="section">
        <h2>Return History</h2>
        <div className="books-grid">
          {returnedBooks.map(book => (
            <div key={book.id} className="book-card returned">
              <div className="book-cover">
                <img src={book.cover} alt={book.title} loading="lazy" />
              </div>
              <div className="book-info">
                <h3>{book.title}</h3>
                <p className="author">by {book.author}</p>
                <div className="borrow-details">
                  <p>Borrowed: {new Date(book.borrowDate).toLocaleDateString()}</p>
                  <p>Returned: {new Date(book.returnDate).toLocaleDateString()}</p>
                </div>
                <div className="return-status">Returned</div>
              </div>
            </div>
          ))}
          {returnedBooks.length === 0 && (
            <div className="empty-message">
              <p>No return history yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BorrowHistory;
