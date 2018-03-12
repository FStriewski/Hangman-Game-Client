// Action Creator
import { A_LETTER } from './types'

export const logAttempt = guess => ({
    type: A_LETTER,
    payload:  guess
});
