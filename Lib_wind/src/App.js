import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/FunctionalComponents/Navbar/Navbar';
import Home from './components/FunctionalComponents/Home/Home';
import QuickView from './components/FunctionalComponents/QuickView/QuickView';
import Books from './components/FunctionalComponents/Books/Books';
import BorrowedBooks from './components/FunctionalComponents/BorrowedBooks/BorrowedBooks';
import Wishlist from './components/FunctionalComponents/Wishlist/Wishlist';
import Profile from './components/FunctionalComponents/Profile/Profile';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quick-view/:id" element={<QuickView />} />
            <Route path="/books" element={<Books />} />
            <Route path="/borrowed" element={<BorrowedBooks />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
