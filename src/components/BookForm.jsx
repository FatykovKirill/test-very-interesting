import React, { useState } from 'react';
import ButtonBook from './UI/ButtonBook/ButtonBook';
import InputForm from './UI/InputForm/InputForm';

const isValidISBN = (item) => {
  let regex = new RegExp(/^(?=(?:[^0-9]*[0-9]){10}(?:(?:[^0-9]*[0-9]){3})?$)[\d-]+$/);

  if (item === null) {
    return "false";
  }

  if (regex.test(item) === true) {
    return "true";
  }
  else {
    return "false";
  }

};

const BookForm = ({ create }) => {
  const [book, setBook] = useState({ name: '', author: '' });

  const addNewBook = (e) => {
    e.preventDefault();
    const newBook = {
      ...book, id: Date.now()
    }
    create(newBook);
    setBook({ name: '', author: '', year: '', rating: '', isbn: '' });
  };

  return (
    <form>
      <InputForm
        value={book.name}
        onChange={e => setBook({ ...book, name: e.target.value })}
        type="text"
        placeholder="Название Книги"
      />
      <InputForm
        value={book.author}
        onChange={e => setBook({ ...book, author: e.target.value })}
        type="text"
        placeholder="Автор книги"
      />
      <InputForm
        value={book.year}
        onChange={e => setBook({ ...book, year: e.target.value })}
        type="text"
        placeholder="Год Публикации"
      />
      <InputForm
        value={book.rating}
        onChange={e => setBook({ ...book, rating: e.target.value })}
        type="text"
        placeholder="Рейтинг"
      />
      <InputForm
        value={book.isbn}
        onChange={e => setBook({ ...book, isbn: e.target.value })}
        type="text"
        placeholder="ISBN"
      />
      <ButtonBook onClick={addNewBook}>Создать пост</ButtonBook>
    </form>
  );
};

export default BookForm;