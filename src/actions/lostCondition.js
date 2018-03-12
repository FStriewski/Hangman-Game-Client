// Action Creator
import { LOST } from './types'

export const declareLost = condition => ({
    type: LOST,
    payload:  condition
});
