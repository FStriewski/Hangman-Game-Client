import React, { Component } from 'react';
import './App.css';
//import GameContainer from './containers/GameContainer'
import Statbox from './components/Statbox'
import SubmitGuess from './components/SubmitGuess';
import Word from './components/Word';

class App extends Component {
  render() {
    return (
      <div className="App container text-white bg-dark">
        <h1>Hangman!</h1>
        <Word />
        <SubmitGuess />
        <Statbox />
      </div>
    );
  }
}

export default App;
