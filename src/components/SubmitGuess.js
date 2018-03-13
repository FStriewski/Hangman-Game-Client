import React, { PureComponent } from 'react'
import { logAttempt, replaceLetter } from '../actions/logInput'
import { countUp } from '../actions/countWrong'
import { changeStatus } from '../actions/gameStatus'
import { connect } from 'react-redux'
import '../style/SubmitGuess.css'


// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }
//
// ReactDOM.render(
//   // Try changing to isLoggedIn={true}:
//   <Greeting isLoggedIn={false} />,
//   document.getElementById('root')
// );


export class SubmitGuess extends PureComponent {

  // Slim actions / put into one
  // Better use refs here
  // Make button small

  handleSubmit = (event) => {


    // Lock game if not running -- not quite working
    if(this.props.newGame.status !== "pending") {
      document.getElementById('PlayerInputField').value = ""
      return
    }

    let guess = event.target.value
                .toUpperCase()
                .slice(0, 1)

    // Don't process duplicate input:
     if (!this.props.logInput.guessesSoFar.includes(guess)){
          this.props.logAttempt(guess)

    // Check if letter is in word:
          if (this.props.newGame.wordToGuess.includes(guess)){
              this.props.replaceLetter(guess)
          } else {
            this.props.countUp()
            if (this.props.countWrong.counter > 2){
              this.props.changeStatus("lost")
              alert("YOU HAVE LOST!")
            }
          }
    }

    // Use value to and get rid of this by using state
    document.getElementById('PlayerInputField').value = ""
  };

  render() {
    return (
      <div className="PlayerInpumapStateToPropst">
        <div className="SubmitLetter">Make a guess<input type="text" className="Input" id="PlayerInputField" placeholder="" onChange={this.handleSubmit} /></div>
      </div>
    )
  }
}

const mapStateToProps = ({ newGame, countWrong, logInput }) => ({ newGame, countWrong, logInput })

export default connect(mapStateToProps, { logAttempt, replaceLetter, countUp, changeStatus  })(SubmitGuess)
