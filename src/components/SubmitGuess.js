import React, { PureComponent } from 'react'
import { logAttempt, replaceLetter } from '../actions/logInput'
//import { replaceLetter } from '../actions/correctGuesses'
import { countUp } from '../actions/countWrong'
import { declareLost, declareWon } from '../actions/gameStatus'
import { connect } from 'react-redux'
//import {wordToGuess} from './wordRepos'
import '../style/SubmitGuess.css'


export class SubmitGuess extends PureComponent {

  // determineWinLose = (test) => {
  //  return  (test > 1) ? alert("ww") : null
  // }

  handleClick = (event) => {
        const val = event.target.value
// Slim actions / put into one
// Better use refs here
// Make button small
    let guess = val
                .toUpperCase()
                .slice(0, 1)

 if (!this.props.logInput.guessesSoFar.includes(guess)){
      this.props.logAttempt(guess)

      if (this.props.newGame.wordToGuess.includes(guess)){
          this.props.replaceLetter(guess)
      } else {
        this.props.countUp()
      }
}

    // Use value to and get rid of this by using state
    document.getElementById('PlayerInputField').value = ""
  };

  render() {
    return (
      <div className="PlayerInpumapStateToPropst">
        <div className="SubmitLetter">Make a guess<input type="text" className="Input" id="PlayerInputField" placeholder="" onChange={this.handleClick} /></div>
      </div>
    )
  }
}

const mapStateToProps = ({ newGame, countWrong, logInput }) => ({ newGame, countWrong, logInput })

  export default connect(mapStateToProps, { logAttempt, replaceLetter, countUp  })(SubmitGuess)
