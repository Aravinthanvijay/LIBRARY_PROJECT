import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { BorrowProvider } from './context/BorrowContext';
import Navbar from './components/FunctionalComponents/Navbar/Navbar';
import Home from './components/FunctionalComponents/Home/Home';
import Books from './components/FunctionalComponents/Books/Books';
import BorrowHistory from './components/ClassComponents/BorrowHistory/BorrowHistory';
import Login from './components/FunctionalComponents/Auth/Login';
import Signup from './components/FunctionalComponents/Auth/Signup';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <BorrowProvider>
          <div className="app">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<Books />} />
              <Route path="/borrow-history" element={<BorrowHistory />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </BorrowProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
