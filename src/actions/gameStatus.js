// Action Creator
import { LOST, WON } from './types'

export const declareLost = status => ({
    type: LOST,
    payload:  status
});

export const declareWon = status => ({
    type: WON,
    payload:  status
});
