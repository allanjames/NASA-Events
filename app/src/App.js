import React, { Component } from 'react';
import logo from './_logo.svg';
import Api from './components/Api';

import './App.css';

require('dotenv').config()

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Api test="testing" />
      </div>
    );
  }
}

export default App;