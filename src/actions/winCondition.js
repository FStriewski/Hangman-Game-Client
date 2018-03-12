// Action Creator
import { WIN } from './types'

export const declareWin = condition => ({
    type: WIN,
    payload:  condition
});
