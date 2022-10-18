// 0 - rock
// 1 - paper
// 2 - scissors
// 3 - lizard
// 4 - spock
const options = ['rock', 'paper', 'scissors', 'lizard', 'spock']

const beating = [
  ['lizard', 'scissors'],
  ['rock', 'spock'],
  ['paper', 'lizard'],
  ['spock', 'paper'],
  ['scissors', 'rock'],
]

const getAIChoice = (modified: boolean) => {
  let number: number
  if (modified) {
    number = Math.floor(Math.random() * 5)
  } else {
    number = Math.floor(Math.random() * 3)
  }
  return number
}

const whoIsWinner = (PlayerChoise: number, AIChoice: number) => {
  if (PlayerChoise === AIChoice) {
    return 'draw'
  } else {
    if (beating[PlayerChoise].includes(options[AIChoice])) {
      return 'player'
    } else {
      return 'ai'
    }
  }
}

export { getAIChoice, whoIsWinner }
