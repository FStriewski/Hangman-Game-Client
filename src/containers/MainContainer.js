import React, { Component } from 'react';
import Statbox from '../components/Statbox'
import SubmitGuess from '../components/SubmitGuess';
import Word from '../components/Word';
import HangSteps from '../components/HangSteps';

class MainContainer extends Component {
  render() {
    return (
      <div className="ml-5 col-8 text-white bg-dark">
        <h1>Hangman!</h1>
        <Word />
        <SubmitGuess />
        <Statbox />
      </div>
    );
  }
}
export default MainContainer;
