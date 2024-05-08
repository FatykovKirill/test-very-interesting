import React from 'react';
import ButtonBook from './UI/ButtonBook/ButtonBook';

const Bookitem = ({ props, remove }) => {

  const renderOptionItem = (name, value) => {
    if (value === null) {
      return '';
    }
    return `${name}: ${value}`
  };

  return (
    <div className='book'>
      <h2 className='book__name'>{props.name}</h2>
      <ul className='book__content'>
        <li>Автор: {Array.isArray(props.author) ? props.author.join(', ') : props.author}</li>
        <li>{renderOptionItem('Год публикации', props.year)}</li>
        <li>{renderOptionItem('Рейтинг', props.rating)}</li>
        <li>{renderOptionItem('ISBN', props.isbn)}</li>
      </ul>
      <div className="book__btn">
        <ButtonBook onClick={() => remove(props)}>Удалить</ButtonBook>
      </div>
    </div>
  );
};

export default Bookitem;