
export default function(state = {counter: 0}, action = {}) {

  if (action.type === 'COUNT'){
    return {
      ...state, counter: state.counter += 1
    }
  }
  return state
}
