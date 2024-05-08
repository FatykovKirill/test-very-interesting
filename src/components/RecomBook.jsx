import React from 'react';
import Bookitem from './Bookitem';

const RecomBook = ({ books }) => {
  const recomBook = books.filter((book) => {
    return (new Date().getFullYear()) - book.year > 3 &&
      book.year !== '' &&
      book.rating > 4
  });
  const getRandomBook = (books) => books[Math.floor(Math.random() * books.length)];
  const book = getRandomBook(recomBook);
  return (
    <div className='book__recom'>
      <h1>Рекомендуемая книга</h1>
      <Bookitem props={book} id={book.id} />
    </div>
  );
};

export default RecomBook;