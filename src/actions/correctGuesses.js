// Action Creator
import { CORRECT_GUESS  } from './types'

export const replaceLetter = letter => ({
    type: CORRECT_GUESS ,
    payload:  letter
});
