import word, {wordToGuess, wordHidden} from './word'

describe('word reducer', () => {
  const reducer = word
  const initialState = {wordToGuess, wordHidden}

  it('returns an word for the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })
})
