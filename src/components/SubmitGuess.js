import React, { PureComponent } from 'react'
import { logAttempt } from '../actions/logInput'
import { replaceLetter } from '../actions/correctGuesses'
import { countUp } from '../actions/countWrong'
import { declareLost } from '../actions/lostCondition'
import { declareWon } from '../actions/winCondition'
import { connect } from 'react-redux'
//import {wordToGuess} from './wordRepos'
import './SubmitGuess.css'


export class SubmitGuess extends PureComponent {

  handleClick = () => {

// Slim actions / put into one
// Better use refs here
// Make button small
    let guess = document.getElementById('PlayerInputField').value.toUpperCase().slice(0, 1);
    this.props.logAttempt(guess)

    if (this.props.newGame.wordToGuess.includes(guess)){
      this.props.replaceLetter(guess)
    } else {
      this.props.countUp()
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

const mapStateToProps = ({ newGame }) => ({ newGame })

  export default connect(mapStateToProps, { logAttempt, replaceLetter, countUp  })(SubmitGuess)
