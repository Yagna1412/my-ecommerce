import React from 'react';
import { BookData } from '../Data/BookData';
import { Link } from 'react-router-dom';

const Books = () => {
  return (
    <div className='proSection'>
      {BookData.map((book) => (
        <div key={book.id} className='productCard'>
          <Link to={`/books/${book.id}`}>
            <img className='proImg' src={book.image} alt={book.title} />
          </Link>
          <h2>{book.title}</h2>
          <p>by {book.author}</p>
          <p>Price: ₹{book.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Books;
