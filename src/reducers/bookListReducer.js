import constants from '../constants';

const { initialState, types } = constants;

const bookListReducer = (state = initialState.bookList, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default bookListReducer;