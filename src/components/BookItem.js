import React from 'react';

const BookItem = (props) => {

  function authorString() {
    return props.book.volumeInfo.authors.join(', ');
  }

  return(
    <div className='book-item'>
      <div className='book-item-info'>
        <p>{props.book.volumeInfo.title}</p>
        <p>By: {authorString()}</p>
      </div>
      <div className='book-item-thumbnail-container'>
        <img src={props.book.volumeInfo.imageLinks.thumbnail} />
      </div>
    </div>
  );
};

export default BookItem;