import { useState, useEffect } from 'react'
import { options, getAIChoice, whoIsWinner } from '../../gameLogic'
import { gameThings, bgPentagon, bgTraingle } from '../../assets/assets'

type Props = {
  isGameModified: boolean | undefined
  points: number
  setPoints: (val: number) => void
  gameState: number
  setGameState: (val: number) => void
}

const MainGame: React.FC<Props> = ({ isGameModified, points, setPoints, gameState, setGameState }) => {
  const [playerChoice, setPlayerChoice] = useState<number>()
  const [AIChoice, setAIChoice] = useState<number>()
  const [winner, setWinner] = useState<string>()

  const playerChooseFunc = (index: number) => {
    setPlayerChoice(index)
    isGameModified !== undefined ? setAIChoice(getAIChoice(isGameModified)) : ''
    setGameState(3)
    setTimeout(() => {
      setGameState(4)
    }, 1500)
    setTimeout(() => {
      setGameState(5)
    }, 3000)
  }

  const reset = () => {
    setPlayerChoice(undefined)
    setAIChoice(undefined)
    setWinner(undefined)
    setGameState(2)
  }

  useEffect(() => {
    if (gameState === 0) {
      setPlayerChoice(undefined)
      setAIChoice(undefined)
      setWinner(undefined)
    }
  }, [gameState])

  useEffect(() => {
    if (playerChoice !== undefined && AIChoice !== undefined) {
      setWinner(whoIsWinner(playerChoice, AIChoice))
    }
  }, [playerChoice, AIChoice])

  useEffect(() => {
    if (gameState !== 5) return
    if (winner === 'player') {
      setPoints(points + 1)
    } else if (winner === 'ai') {
      setPoints(points - 1)
    }
  }, [winner, gameState])

  return (
    <>
      <div id='game-container' className={`${gameState === 5 && winner === 'player' ? 'winner' : ''}`}>
        <div id='player-chooses'>
          <img id='bg-img' src={isGameModified ? bgPentagon : bgTraingle} alt={isGameModified ? 'bgPentagon' : 'bgTraingle'} />
          {gameThings.map((i, index) => {
            if (!isGameModified) {
              if (index < 3) {
                return (
                  <div
                    key={index}
                    className={`item item-${index} ${index === playerChoice ? 'choosen' : ''} `}
                    onClick={() => {
                      playerChooseFunc(index)
                    }}
                  >
                    <div>
                      <img src={i} alt={options[index]} />
                    </div>
                  </div>
                )
              } else return
            } else {
              return (
                <div
                  key={index}
                  className={`item item-${index} ${index === playerChoice ? 'choosen' : ''}`}
                  onClick={() => {
                    playerChooseFunc(index)
                  }}
                >
                  <div>
                    <img src={i} alt={options[index]} />
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>

      <div id='ai-choice' className={`${gameState === 5 && winner === 'ai' ? 'winner' : ''}`}>
        {gameState <= 4 ? (
          <div className='waiting'></div>
        ) : gameState === 5 ? (
          <div className={`item item-${AIChoice}`}>
            <div>
              <img src={AIChoice !== undefined ? gameThings[AIChoice] : ''} alt={AIChoice !== undefined ? options[AIChoice] : ''} />
            </div>
          </div>
        ) : (
          ''
        )}
      </div>

      <div id='play-again'>
        <p>{winner === 'player' ? 'You win' : winner === 'ai' ? 'You Lose' : winner === 'draw' ? 'Draw' : ''}</p>
        <button onClick={() => reset()}>Play Again</button>
      </div>
    </>
  )
}

export default MainGame
