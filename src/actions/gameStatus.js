// Action Creator
import { LOST, WON, NEW_GAME  } from './types'


export const newGame = (wordToGuess, status) => {
  return {
    type: NEW_GAME,
    payload: {
      wordToGuess,
      status,
    }
  }
}

export const declareLost = () => ({
    type: LOST,
    payload:  "lost"
});

export const declareWon = status => ({
    type: WON,
    payload:  "won"
});
