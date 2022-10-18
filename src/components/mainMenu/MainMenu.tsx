type Props = {
  setGameState: (val: number) => void
  setIsGameModified: (val: boolean) => void
}

const MainMenu: React.FC<Props> = ({ setGameState, setIsGameModified }) => {
  const startGame = (modified: boolean) => {
    setGameState(1)
    setIsGameModified(modified)
    setTimeout(() => setGameState(2), 1000)
  }
  return (
    <div id='main-menu-container'>
      <button onClick={() => startGame(false)}>
        Rock <br /> Paper <br /> Scissors
      </button>
      <button onClick={() => startGame(true)}>
        Rock <br /> Paper <br /> Scissors <br /> Lizard <br /> Spock
      </button>
    </div>
  )
}

export default MainMenu
