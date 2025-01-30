import React, { createContext, useContext, useState } from 'react';

const BorrowContext = createContext();

export const useBorrow = () => {
  return useContext(BorrowContext);
};

export const BorrowProvider = ({ children }) => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [returnedBooks, setReturnedBooks] = useState([]);

  const borrowBook = (book) => {
    const borrowDate = new Date();
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 30); // 30 days borrow period

    const borrowedBook = {
      ...book,
      borrowDate: borrowDate.toISOString(),
      dueDate: dueDate.toISOString(),
      status: 'borrowed'
    };

    setBorrowedBooks(prev => {
      if (!prev.some(item => item.id === book.id)) {
        return [...prev, borrowedBook];
      }
      return prev;
    });
  };

  const returnBook = (bookId) => {
    const book = borrowedBooks.find(book => book.id === bookId);
    if (book) {
      const returnedBook = {
        ...book,
        returnDate: new Date().toISOString(),
        status: 'returned'
      };

      setReturnedBooks(prev => [...prev, returnedBook]);
      setBorrowedBooks(prev => prev.filter(book => book.id !== bookId));
    }
  };

  const isBorrowed = (bookId) => {
    return borrowedBooks.some(book => book.id === bookId);
  };

  return (
    <BorrowContext.Provider value={{ 
      borrowedBooks, 
      returnedBooks, 
      borrowBook, 
      returnBook, 
      isBorrowed 
    }}>
      {children}
    </BorrowContext.Provider>
  );
};
