import React, { Component } from 'react';
import './BookList.css';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          id: 1,
          title: 'The Great Gatsby',
          author: 'F. Scott Fitzgerald',
          isbn: '978-0743273565',
          category: 'Fiction',
          available: true,
          coverImage: 'https://example.com/gatsby.jpg'
        },
        {
          id: 2,
          title: 'To Kill a Mockingbird',
          author: 'Harper Lee',
          isbn: '978-0446310789',
          category: 'Fiction',
          available: true,
          coverImage: 'https://example.com/mockingbird.jpg'
        }
      ],
      searchTerm: '',
      filterCategory: 'all'
    };
  }

  handleSearch = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleCategoryFilter = (e) => {
    this.setState({ filterCategory: e.target.value });
  };

  handleBorrow = (bookId) => {
    this.setState(prevState => ({
      books: prevState.books.map(book =>
        book.id === bookId ? { ...book, available: false } : book
      )
    }));
  };

  handleReturn = (bookId) => {
    this.setState(prevState => ({
      books: prevState.books.map(book =>
        book.id === bookId ? { ...book, available: true } : book
      )
    }));
  };

  getFilteredBooks = () => {
    return this.state.books.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
                          book.author.toLowerCase().includes(this.state.searchTerm.toLowerCase());
      const matchesCategory = this.state.filterCategory === 'all' || 
                            book.category.toLowerCase() === this.state.filterCategory;
      return matchesSearch && matchesCategory;
    });
  };

  render() {
    const filteredBooks = this.getFilteredBooks();

    return (
      <div className="book-list">
        <div className="book-list-header">
          <h2>Library Books</h2>
          <div className="filters">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search books or authors..."
                value={this.state.searchTerm}
                onChange={this.handleSearch}
              />
            </div>
            <div className="category-filter">
              <select
                value={this.state.filterCategory}
                onChange={this.handleCategoryFilter}
              >
                <option value="all">All Categories</option>
                <option value="fiction">Fiction</option>
                <option value="non-fiction">Non-Fiction</option>
                <option value="science">Science</option>
                <option value="technology">Technology</option>
              </select>
            </div>
          </div>
        </div>

        <div className="books-grid">
          {filteredBooks.map(book => (
            <div key={book.id} className="book-card">
              <div className="book-cover">
                <img src={book.coverImage} alt={book.title} />
                <div className={`status-badge ${book.available ? 'available' : 'borrowed'}`}>
                  {book.available ? 'Available' : 'Borrowed'}
                </div>
              </div>
              <div className="book-info">
                <h3>{book.title}</h3>
                <p className="author">by {book.author}</p>
                <p className="category">{book.category}</p>
                <p className="isbn">ISBN: {book.isbn}</p>
                <button
                  onClick={() => book.available ? this.handleBorrow(book.id) : this.handleReturn(book.id)}
                  className={book.available ? 'borrow-btn' : 'return-btn'}
                >
                  {book.available ? 'Borrow' : 'Return'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="no-results">
            <p>No books found matching your search criteria.</p>
          </div>
        )}
      </div>
    );
  }
}

export default BookList;
