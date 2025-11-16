import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Catalogue.css';

function Catalogue() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await axios.get('/api/books');
      setBooks(res.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching books:', err);
      setLoading(false);
    }
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="loading">Loading books...</div>;
  }

  return (
    <div className="catalogue">
      <div className="catalogue-header">
        <h1>Book Catalogue</h1>
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {filteredBooks.length === 0 ? (
        <div className="no-books">
          <p>No books found. Add some books to get started!</p>
        </div>
      ) : (
        <div className="books-grid">
          {filteredBooks.map((book) => (
            <div key={book._id} className="book-card">
              <img src={book.image} alt={book.title} />
              <div className="book-info">
                <h3>{book.title}</h3>
                <p className="author">by {book.author}</p>
                <p className="description">{book.description}</p>
                <div className="book-footer">
                  <span className="price">${book.price}</span>
                  <button className="add-btn">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Catalogue;
