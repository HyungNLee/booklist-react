import React from 'react';
import { connect } from 'react-redux';
import BookList from '../components/BookList';

class VisibleBookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
    this.searchInputHandler = this.searchInputHandler.bind(this);
    this.filterByAuthors = this.filterByAuthors.bind(this);
  }

  filterBookList() {
    if (this.state.input === '') {
      return this.props.bookList;
    } else {
      return this.props.bookList.filter(book =>
        RegExp(`${this.state.input}`, 'i').test(book.volumeInfo.title) ||
        this.filterByAuthors(book.volumeInfo.authors, this.state.input)
      );
    }
  }

  filterByAuthors(authorArray, input) {
    let value = 0;
    authorArray.forEach(author => {
      value += RegExp(`${input}`, 'i').test(author);
    });
    return (value >= 1);
  }

  searchInputHandler(e) {
    this.setState({
      input: e.target.value
    });
  }

  render() {
    console.log(this.state.input);
    return (
      <div>
        <form>
          <label htmlFor='search-input'>Search: </label>
          <input type='text' name='search-input' placeholder='Search...' onChange={this.searchInputHandler}/>
        </form>
        <BookList bookList={this.filterBookList()}/>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    bookList: state.bookList,
  };
};

export default connect(mapStateToProps)(VisibleBookList);