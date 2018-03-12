import {wordToGuess, wordHidden} from '../components/wordRepos'

const initialState = {
  wordToGuess,
  wordHidden,
  correctLetters : []
};

export default function(state = initialState, action = {}) {

  if (action.type === 'CORRECT_GUESS'){
    return {
          ...state,
         correctLetters: state.correctLetters.concat(action.payload),
    }
  }

  return state
}
