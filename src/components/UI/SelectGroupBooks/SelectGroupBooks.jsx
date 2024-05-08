import React from 'react';
import './SelectGroupBooks.scss'

const SelectGroupBooks = ({ group, setGroup }) => {
  return (
    <>
      <select value={group} onChange={(e) => setGroup(e.target.value)}>
        <option value="year">Год</option>
        <option value="author">Автор</option>
        <option value="rating">Рейтинг</option>
      </select>
    </>
  );
};

export default SelectGroupBooks;