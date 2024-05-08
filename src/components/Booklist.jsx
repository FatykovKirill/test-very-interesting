import React from 'react';
import Bookitem from "./Bookitem";

const Booklist = ({ books, group, remove }) => {

  const groupBy = (books, key) => books.reduce((acc, book) => {
    const groupName = Array.isArray(book[key]) ? book[key].join(', ') : book[key];
    const group = acc[groupName] ?? [];
    return { ...acc, [groupName]: group.concat(book) };
  }, {});

  return (
    <>
      {Object.entries(groupBy(books, group))
        .sort(([a], [b]) => {
          if (a === 'null') return 1;
          if (b === 'null') return -1;
          return group === 'author' ? ((a > b) ? 1 : -1) : ((a < b) ? 1 : -1)
        })
        .map(([groupName, books], index) => {
          return <div className='group' key={index}>
            <h1 className='group__name'>{groupName === 'null' ?
              `Книги без указания ${group === 'year' ? 'года' : 'рейтинга'}` : groupName}</h1>
            {books
              .sort((a, b) => (a.name > b.name) ? 1 : -1)
              .map((book) => <Bookitem remove={remove} props={book} key={book.id} />)}
          </div>
        })}
    </>
  );
};

export default Booklist;