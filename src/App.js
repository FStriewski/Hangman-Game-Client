import React, { Component } from 'react';
import './App.css';
import GameContainer from './containers/GameContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hangman!</h1>
        <GameContainer />
      </div>
    );
  }
}

export default App;
