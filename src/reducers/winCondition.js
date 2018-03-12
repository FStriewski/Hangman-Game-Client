const initialState = {
  condition: "PLAYING",
};

export default function(state = initialState, action = {}) {

  if (action.type === 'LOST'){
    return {
      ...state, condition: state.condition.assign(action.payload)
    }
  } else if (action.type === 'WON'){
    return {
      ...state, condition: state.condition.assign(action.payload)
    }
  }
  return state
}
