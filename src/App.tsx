import { useState, useEffect } from 'react'
import { MainMenu, Header, MainGame, Footer } from './components'

const App = () => {
  // 0-Menu 1-Hide Menu 2-Show Options 3-player chose 4-waiting 5-result
  const [gameState, setGameState] = useState(0)
  const [isGameModified, setIsGameModified] = useState<boolean>()
  const [originalPoints, setOriginalPoints] = useState(0)
  const [modifiedPoints, setModifiedPoints] = useState(0)
  let loaded = false

  useEffect(() => {
    const originalLocalPoints = Number(localStorage.getItem('originalpoints'))
    const modifiedLocalPoints = Number(localStorage.getItem('modifiedpoints'))
    if (originalLocalPoints !== null) setOriginalPoints(originalLocalPoints)
    if (modifiedLocalPoints !== null) setModifiedPoints(modifiedLocalPoints)
    loaded = true
    setTimeout(() => (loaded = false), 1000)
  }, [])

  useEffect(() => {
    if (loaded) return
    localStorage.setItem('originalpoints', originalPoints.toString())
  }, [originalPoints])
  useEffect(() => {
    if (loaded) return
    localStorage.setItem('modifiedpoints', modifiedPoints.toString())
  }, [modifiedPoints])

  return (
    <div id={`state-${gameState}`} className={`app ${isGameModified ? 'modified' : ''}`}>
      <MainMenu setGameState={setGameState} setIsGameModified={setIsGameModified} />
      <Header isGameModified={isGameModified} points={isGameModified ? modifiedPoints : originalPoints} />
      <MainGame
        isGameModified={isGameModified}
        points={isGameModified ? modifiedPoints : originalPoints}
        setPoints={isGameModified ? setModifiedPoints : setOriginalPoints}
        gameState={gameState}
        setGameState={setGameState}
      />
      <Footer setGameState={setGameState} isGameModified={isGameModified} />
    </div>
  )
}

export default App
