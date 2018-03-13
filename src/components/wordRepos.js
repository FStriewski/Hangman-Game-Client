
  export function generateWord(){

      let sentence = "depiction of a large writhing naked woman whose prominent pudendum would be only more evident when viewed from below saw him accused of pornography and the public prosecutor was called Although the ministry stood by him when Jurisprudence which featured a penitent encircled by a formless squidlike creature caused further disquiet a decision was made to permanently display the paintings in a gallery"

      let wordList = sentence
        .split(" ")
        .filter(x => x.length > 5)

      let randomIndex = Math.floor(Math.random()* wordList.length)

      return wordList[randomIndex].toUpperCase()
    }
