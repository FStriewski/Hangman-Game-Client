// DONT DELETE RENAME TO STATUS
import { STATUS, NEW_GAME  } from '../actions/types'
import { generateWord } from '../components/wordRepos'

let initialState = {
  wordToGuess: generateWord(),
  status: "pending"
}

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case NEW_GAME :
    return { ...state, wordToGuess: payload.wordToGuess, status: payload.status}
    case STATUS :
    return { ...state, wordToGuess: payload.wordToGuess, status: payload.status}
    default :
      return state
  }
}
