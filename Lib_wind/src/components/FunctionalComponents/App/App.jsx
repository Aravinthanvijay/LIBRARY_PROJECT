import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Books from '../Books/Books';
import BorrowHistory from '../../ClassComponents/BorrowHistory/BorrowHistory';
import Wishlist from '../Wishlist/Wishlist';
import Profile from '../Profile/Profile';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import { WishlistProvider } from '../../../context/WishlistContext';
import { BorrowProvider } from '../../../context/BorrowContext';
import { AuthProvider } from '../../../context/AuthContext';
import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <BorrowProvider>
        <WishlistProvider>
          <Router>
            <div className="app-container">
              <Navbar />
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/books" element={<Books />} />
                  <Route path="/borrow-history" element={<BorrowHistory />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                </Routes>
              </main>
            </div>
          </Router>
        </WishlistProvider>
      </BorrowProvider>
    </AuthProvider>
  );
};

export default App;
