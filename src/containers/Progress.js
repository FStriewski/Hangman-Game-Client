
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Statbox from '../components/Statbox'
import SubmitGuess from '../components/SubmitGuess';
import Word from '../components/Word';
import HangSteps from '../components/HangSteps';

class ProgressBar extends Component {

   test(){
    //let progressString = `${progress}%`
    //let wordToGuessArray = this.props.newGame.wordToGuess.split("")
    let word = this.props.newGame.wordToGuess
    let allGuesses = this.props.logInput.correctLetters.length

    let wordUnq = word.split("").filter(function(item, pos) {
    return word.indexOf(item) == pos;
    })


let perc = allGuesses/wordUnq.length *100
    //let guessed = wordToGuessArray.map(x => allGuesses.includes(x));
    //let perc = Math.floor((guessed.length / wordToGuessArray.length))
console.log(word)
console.log(allGuesses)
    return {width : `${perc}%`}
  };




  render() {

  // function test(){
  //   //let progressString = `${progress}%`
  //   let wordToGuessArray = this.props.newGame.wordToGuess.split("")
  //   let allGuesses = this.props.logInput.correctLetters
  //   let guessed = wordToGuessArray.map(x => allGuesses.includes(x));
  //   let perc = Math.floor((guessed.length / wordToGuessArray.length) * 100)
  //
  //   return {width : `${perc}%`}
  // };

  //let style = test(99)

  //  let progress = this.props.countWrong.counter

    return (
      <div className="text-white bg-dark">
        <div className="progress" style={{height: "10px"}}>
          <div className="progress-bar progress-bar-striped bg-secondary" role="progressbar" style={this.test()}></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ newGame, logInput }) => ({ newGame, logInput })
export default connect(mapStateToProps, {})(ProgressBar)
