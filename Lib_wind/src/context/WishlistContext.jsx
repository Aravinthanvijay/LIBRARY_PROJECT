import React, { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => {
  return useContext(WishlistContext);
};

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (book) => {
    setWishlist(prev => {
      if (!prev.some(item => item.id === book.id)) {
        return [...prev, book];
      }
      return prev;
    });
  };

  const removeFromWishlist = (bookId) => {
    setWishlist(prev => prev.filter(book => book.id !== bookId));
  };

  const isInWishlist = (bookId) => {
    return wishlist.some(book => book.id === bookId);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
