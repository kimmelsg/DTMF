import React, { Component } from 'react';
import './App.css';
import Dialpad from './Dialpad';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Dialpad />
        </header>
      </div>
    );
  }
}

export default App;
