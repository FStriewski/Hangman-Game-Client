import React, { Component } from 'react';
import './GameContainer.css';
import Word from '../components/Word';
import Statbox from '../components/Statbox';
import NewGameButton from '../components/newGameButton';
import SubmitGuess from '../components/SubmitGuess';


class GameContainer extends Component {
  render() {
    return (
      <div className="GameContainer">
      <Word />
        <div id="flexBox">
          <SubmitGuess />
          <Statbox />
        </div>
        <NewGameButton />
      </div>
    );
  }
}

export default GameContainer;
