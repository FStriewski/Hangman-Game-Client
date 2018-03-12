import { NEW_GAME } from './types'
//import {wordToGuess} from '../components/wordRepos'

export const newGame = (wordToGuess) => {

  return {
    type: NEW_GAME,
    payload: {
      wordToGuess,
    }
  }
}
