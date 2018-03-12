// Action Creator
import { A_LETTER, CORRECT_GUESS  } from './types'

export const logAttempt = guess => ({
    type: A_LETTER,
    payload:  guess
});

export const replaceLetter = letter => ({
    type: CORRECT_GUESS ,
    payload:  letter
});

// export const logAttempt = guess => ({
//     type: A_LETTER,
//     payload:  guess
// });


// replaceLetter
