
import React, { Component } from 'react';
import { connect } from 'react-redux'

class ProgressBar extends Component {

   test(){
    //let progressString = `${progress}%`
    //let wordToGuessArray = this.props.newGame.wordToGuess.split("")

    function makeUnique(x){
      return x.filter(function(item, pos) {
        return x.indexOf(item) == pos
      })
    }

    let word = makeUnique(this.props.newGame.wordToGuess.split(""))
    let allGuesses = makeUnique(this.props.logInput.correctLetters)
      console.log(word, allGuesses)
    let perc = allGuesses.length/word.length *100
    return {width : `${perc}%`}
  };

  render() {

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
