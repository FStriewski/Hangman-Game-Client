
let initialState = {
  wordToGuess: "",
  status: "pending"
}

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case 'NEW_GAME' :

    return { ...state, wordToGuess: payload.wordToGuess}

    default :
      return state
  }
}
