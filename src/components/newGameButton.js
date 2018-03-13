import React, { Component } from 'react';
import { connect } from 'react-redux'
import { generateWord } from './wordRepos'
import { newGame } from '../actions/gameStatus'
import '../style/newGameButton.css';

class NewGameButton extends Component {


  handleClick = () => {
    let word = generateWord()
    this.props.newGame(word, "pending")
  }

  render() {

    return (
      <button
        onClick={this.handleClick}
        className="newGameButton"
      >
        New Game
      </button>

    );
  }
}

export default connect(null, {newGame})(NewGameButton)
