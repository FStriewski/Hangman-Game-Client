// Action Creator
import { STATUS, NEW_GAME  } from './types'


export const newGame = (wordToGuess, status) => {
  return {
    type: NEW_GAME,
    payload: {
      wordToGuess,
      status,
    }
  }
}

export const changeStatus = (status) => ({
    type: STATUS,
    payload:  status
});
