import React, { Component } from 'react';
import Word from '../components/Word';
import Statbox from '../components/Statbox';
import NewGameButton from '../components/newGameButton';
import SubmitGuess from '../components/SubmitGuess';
import './GameContainer.css';


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

class GameContainer extends Component {
  render() {
    return (
      <div className="GameContainer">
      <Word />
          <SubmitGuess />
      </div>
    );
  }
}

export default GameContainer;
