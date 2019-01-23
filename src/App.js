import React, { Component } from 'react';
// Component Imports
import VisibleBookList from './containers/VisibleBookList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        ** APP TEST **
        <VisibleBookList />
      </div>
    );
  }
}

export default App;