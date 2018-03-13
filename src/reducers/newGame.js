
let initialState = {
  wordToGuess: "",
  status: ""
}

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case 'NEW_GAME' :

    return { ...state, wordToGuess: payload.wordToGuess, status: payload.status}

    default :
      return state
  }
}
