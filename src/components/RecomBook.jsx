import React from 'react';
import Bookitem from './Bookitem';

const RecomBook = ({ books }) => {
  const goodBooks = books.filter((book) =>
    (new Date().getFullYear()) - book.year > 3
    && book.year
  );
  const maxRating = Math.max(...goodBooks.map((item) => item.rating));
  const bestBooks = goodBooks.filter(book => parseInt(book.rating) === maxRating);
  const getRandomBook = (books) => books[Math.floor(Math.random() * books.length)];
  const book = getRandomBook(bestBooks);
  return (
    <div className='book__recom'>
      <h1>Рекомендуемая книга</h1>
      <Bookitem props={book} />
    </div>
  );
};

export default RecomBook;