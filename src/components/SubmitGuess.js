import React, { PureComponent } from 'react'
import { logAttempt, replaceLetter } from '../actions/logInput'
import { countUp } from '../actions/countWrong'
import { changeStatus } from '../actions/gameStatus'
import { connect } from 'react-redux'
import '../style/SubmitGuess.css'


export class SubmitGuess extends PureComponent {

  triggerWin() {}

  handleSubmit = (event) => {
  //  if(this.props.newGame.status == "pending") {
    // Lock game if not running -- not quite working

    //   document.getElementById('PlayerInputField').value = ""
    //   return
    // }

    setTimeout(function(){
      document.getElementById('PlayerInputField').value = ""
    }, 250);

    if (this.props.countWrong.counter > 6){
      this.props.changeStatus("lost")
      return
    } else {

          let guess = event.target.value
                      .toUpperCase()
                      .slice(0, 1)

            // Don't process duplicate input:
             if (!this.props.logInput.guessesSoFar.includes(guess)){
                  this.props.logAttempt(guess)

                  // if((this.props.newGame.wordToGuess).indexOf(this.props.logInput.guessesSoFar)<=0){
                  //   alert("Winner!")
                  }

            // Check if letter is in word:
                  if (this.props.newGame.wordToGuess.includes(guess)){
                      this.props.replaceLetter(guess)
                  } else {
                    this.props.countUp()
                    }
            }


      // Use value to and get rid of this by using state

  //    }
      //else if (this.props.newGame.status == "won"){this.props.changeStatus("lost") }
    }

  render() {
    return (
      <div className="InputWrapper d-flex justify-content-center">
        <div className="SubmitLetter ">Make a guess <input type="text" className="Input text-center" id="PlayerInputField" placeholder="" onChange={this.handleSubmit} /></div>
      </div>
    )
  }
}

const mapStateToProps = ({ newGame, countWrong, logInput }) => ({ newGame, countWrong, logInput })

export default connect(mapStateToProps, { logAttempt, replaceLetter, countUp, changeStatus  })(SubmitGuess)
