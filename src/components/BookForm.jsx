import React, { useState } from 'react';
import ButtonBook from './UI/ButtonBook/ButtonBook';
import InputForm from './UI/InputForm/InputForm';

const isValidISBN = (item) => {
  let regex = new RegExp(/^(?=(?:[^0-9]*[0-9]){10}(?:(?:[^0-9]*[0-9]){3})?$)[\d-]+$/);

  if (regex.test(item) === true || item === '') {
    return true;
  }

  return false;

};


const BookForm = ({ create }) => {
  const [book, setBook] = useState({ name: '', author: '', year: '', rating: '', isbn: '' });

  const [errors, setErrors] = useState({});

  const validateForm = (book) => {
    const errors = {};
    if (!book.name.trim()) {
      errors.name = 'Название книги не может быть пустым';
    }
    if (book.name.trim().length > 100) {
      errors.name = 'В название книги не может быть больше 100 символов';
    }
    if (!book.author.trim()) {
      errors.author = 'Книга должна содержать хотя бы одного автора'
    }
    if (parseInt(book.year) < 1800) {
      errors.year = 'Год книги должен быть не раньше 1800'
    }
    if (parseInt(book.rating) < 0 || parseInt(book.rating) > 10) {
      errors.rating = 'Рейтинг должен быть от 0 до 10'
    }
    if (!isValidISBN(book.isbn)) {
      errors.isbn = 'Некорректный номер isbn'
    }
    return errors;
  };

  const addNewBook = (e) => {
    e.preventDefault();
    const newErrors = validateForm(book);
    setErrors(newErrors);
    if (Object.keys(newErrors).length !== 0) {
      return;
    }

    create(book);
    setBook({ name: '', author: '', year: '', rating: '', isbn: '' });
    setErrors({});
  };

  return (
    <form>
      <InputForm
        value={book.name}
        onChange={e => {
          setBook({ ...book, name: e.target.value });
          setErrors({ ...errors, name: false });
        }}
        type="text"
        placeholder="Название Книги"
      />
      {errors.name &&
        <span className="error-message">
          {errors.name}
        </span>
      }

      <InputForm
        value={book.author}
        onChange={e => {
          setBook({ ...book, author: e.target.value });
          setErrors({ ...errors, author: false });
        }}
        type="text"
        placeholder="Автор книги"
      />
      {errors.author &&
        <span className="error-message">
          {errors.author}
        </span>
      }

      <InputForm
        value={book.year}
        onChange={e => {
          setBook({ ...book, year: e.target.value });
          setErrors({ ...errors, year: false });
        }}
        type="number"
        min="1800"
        placeholder="Год Публикации"
      />
      {errors.year &&
        <span className="error-message">
          {errors.year}
        </span>
      }

      <InputForm
        value={book.rating}
        onChange={e => {
          e.target.value = e.target.value === '' ? '0' : e.target.value;
          setBook({ ...book, rating: e.target.value });
          setErrors({ ...errors, rating: false });
        }}
        type="number"
        min="0"
        max="10"
        placeholder="Рейтинг от 0 до 10"
      />
      {errors.rating &&
        <span className="error-message">
          {errors.rating}
        </span>
      }

      <InputForm
        value={book.isbn}
        onChange={e => {
          setBook({ ...book, isbn: e.target.value });
          setErrors({ ...errors, isbn: false });
        }}
        type="text"
        placeholder="ISBN"
      />
      {errors.isbn &&
        <span className="error-message">
          {errors.isbn}
        </span>
      }
      <ButtonBook onClick={addNewBook}>Создать пост</ButtonBook>
    </form >
  );
};

export default BookForm;