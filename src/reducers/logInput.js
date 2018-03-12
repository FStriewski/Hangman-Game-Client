import {wordToGuess, wordHidden} from '../components/wordRepos'
import { CORRECT_GUESS, A_LETTER  } from '../actions/types'

const initialState = {
  wordToGuess,
  wordHidden,
  correctLetters : [],
    guessesSoFar: []
};

export default function(state = initialState, action = {}) {

  switch (action.type) {
    case CORRECT_GUESS:
      return {...state,
           correctLetters: state.correctLetters.concat(action.payload),
      }
      break;
    case A_LETTER:
      return {...state,
        guessesSoFar: state.guessesSoFar.concat(action.payload),
        }
        break;
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
