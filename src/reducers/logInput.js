//import {wordToGuess, wordHidden} from '../components/wordRepos'
import { CORRECT_GUESS, A_LETTER, NEW_GAME  } from '../actions/types'

const initialState = {
  correctLetters : [],
  guessesSoFar: [],
};

export default function(state = initialState, action = {}) {

  switch (action.type) {
    case NEW_GAME:
      return {
            // Filter removes input without mutation.
           guessesSoFar: state.guessesSoFar.filter(x => x == false),
           correctLetters: state.correctLetters.filter(x => x == false),
      }
    case CORRECT_GUESS:
      return {...state,
           correctLetters: state.correctLetters.concat(action.payload),
      }
    case A_LETTER:
      return {...state,
          guessesSoFar: state.guessesSoFar.concat(action.payload),
      }
    // case REVEAL:
    //   return {...state,
    //       guessesSoFar: state.guessesSoFar.concat(action.payload),
    //   }
    default:
      return state
  }
}

/* Syntax reminder
let state = {a: "222", guessesSoFar : []}

function test (x){
  return {
    ...x, guessesSoFar: 2
  }
}

test(state)
*/
