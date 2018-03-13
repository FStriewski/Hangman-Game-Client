// counts wrong input
// export default function(state = {counter: 0}, action = {}) {
//
//   if (action.type === 'COUNT'){
//     return {
//       ...state, counter: state.counter += 1
//     }
//   }
//   return state
// }

import { COUNT, NEW_GAME } from '../actions/types'

export default function(state = {counter: 0}, action = {}) {

    switch (action.type) {
      case NEW_GAME:
        return {
          counter: 0
        }
        case COUNT:
          return {
            counter: state.counter += 1
          }
default:
    return state
  }
}
