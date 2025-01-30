import React from 'react';
import './BorrowedBooks.css';

const BorrowedBooks = () => {
  const borrowedBooks = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602190253i/52578297.jpg",
      borrowDate: "2025-01-15",
      dueDate: "2025-02-15"
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg",
      borrowDate: "2025-01-20",
      dueDate: "2025-02-20"
    }
  ];

  const calculateDaysLeft = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="borrowed-books-container">
      <div className="borrowed-books-header">
        <h1>Borrowed Books</h1>
        <p>Keep track of your borrowed books and their due dates</p>
      </div>

      <div className="borrowed-books-grid">
        {borrowedBooks.map(book => {
          const daysLeft = calculateDaysLeft(book.dueDate);
          return (
            <div key={book.id} className="borrowed-book-card">
              <div className="book-cover">
                <img src={book.cover} alt={book.title} />
                <div className={`due-date-badge ${daysLeft <= 7 ? 'urgent' : ''}`}>
                  {daysLeft} days left
                </div>
              </div>
              <div className="book-info">
                <h3>{book.title}</h3>
                <p className="author">by {book.author}</p>
                <div className="dates">
                  <div className="date-info">
                    <span className="label">Borrowed:</span>
                    <span className="value">{new Date(book.borrowDate).toLocaleDateString()}</span>
                  </div>
                  <div className="date-info">
                    <span className="label">Due:</span>
                    <span className="value">{new Date(book.dueDate).toLocaleDateString()}</span>
                  </div>
                </div>
                <button className="return-btn">Return Book</button>
                <button className="renew-btn">Renew Loan</button>
              </div>
            </div>
          );
        })}
      </div>

      {borrowedBooks.length === 0 && (
        <div className="no-books-message">
          <h2>No books currently borrowed</h2>
          <p>Visit our library to discover and borrow amazing books!</p>
        </div>
      )}
    </div>
  );
};

export default BorrowedBooks;
