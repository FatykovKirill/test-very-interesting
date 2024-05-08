import React from 'react';
import './ButtonBook.scss'

const ButtonBook = ({ children, ...props }) => {
  return (
    <button {...props}
      className='btnBook'>
      {children}
    </button>
  );
};

export default ButtonBook;