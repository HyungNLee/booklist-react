import React from 'react';

const BookItem = (props) => {

  function authorString() {
    return props.book.volumeInfo.authors.join(', ');
  }

  return(
    <div className='book-item'>
      <p>Title: {props.book.volumeInfo.title}</p>
      <p>Authors: {authorString()}</p>
    </div>
  );
};

export default BookItem;