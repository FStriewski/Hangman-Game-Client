
const initialState = {
  guessesSoFar: []
};

export default function(state = initialState, action = {}) {

  if (action.type === 'A_LETTER'){
    return {
      ...state, guessesSoFar: state.guessesSoFar.concat(action.payload)
    }
  }
  return state
}

/* Syntax reminder
let state = {a: "222", guessesSoFar : []}

function test (x){
  return {
    ...x, guessesSoFar: 2
  }
}

test(state)
*/
