import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lines from './components/Lines';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Lines/>
        </header>
      </div>
    );
  }
}

export default App;
