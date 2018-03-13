// DONT DELETE RENAME TO STATUS

import { generateWord } from '../components/wordRepos'

let initialState = {
  wordToGuess: generateWord(),
  status: "pending"
}

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case 'NEW_GAME' :

    return { ...state, wordToGuess: payload.wordToGuess, status: payload.status}

    default :
      return state
  }
}
