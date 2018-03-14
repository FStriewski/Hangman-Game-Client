import React, { Component } from 'react';
import '../style/Word.css';
import { connect } from 'react-redux'
import { changeStatus } from '../actions/gameStatus'


class Word extends Component {

  render() {
    
    var display;
    if(this.props.newGame.status == "pending"){
      let wordToGuessArray = this.props.newGame.wordToGuess.split("")
      let allGuesses = this.props.logInput.correctLetters

      display = wordToGuessArray.map(x => allGuesses.indexOf(x) < 0 ? "_" : x);

      if (!display.includes("_")){
        this.props.changeStatus("won")
        alert("You won!")
       }

    }

    return (
      <div className="Word">
          {display||""}
        <br/>
      </div>
    );
  }
}
// Needs to check on game status
const mapStateToProps = ({ logInput, newGame }) => ({ logInput, newGame })
export default connect(mapStateToProps, {changeStatus})(Word)
