import React from 'react';
import BookItem from './BookItem';

const BookList = (props) => {
  console.log(props.bookList);
  return(
    <div>
      {props.bookList.map((book, index) => (
        <BookItem key={index} book={book} />
      ))}
    </div>
  );
}

export default BookList;