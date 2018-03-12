
import React, { Component } from 'react';
import './Word.css';
import { connect } from 'react-redux'


class Word extends Component {

  render() {

  //  let wordHidden = this.props.correctGuesses.wordHidden
    let wordToGuessArray = this.props.newGame.wordToGuess.split("")
    let allGuesses = this.props.logInput.correctLetters

    let display = wordToGuessArray.map(x => allGuesses.indexOf(x) < 0 ? "_" : x);

    return (
      <div className="Word">
        <br/>
          {display}
        <br/>
      </div>
    );
  }
}

const mapStateToProps = ({ logInput, newGame }) => ({ logInput, newGame })
export default connect(mapStateToProps, {})(Word)
