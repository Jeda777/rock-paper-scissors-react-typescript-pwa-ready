import { useState } from 'react'
import { imageRules, imageRulesBonus, iconClose } from '../../assets/assets'

type Props = {
  setGameState: (val: number) => void
  isGameModified: boolean | undefined
}

const Footer: React.FC<Props> = ({ setGameState, isGameModified }) => {
  const [rulesOpen, setRulesOpen] = useState(false)

  const returnToMenu = () => {
    setGameState(0)
  }

  return (
    <>
      <div id='game-footer'>
        <button data-testid='Menu Button' onClick={() => returnToMenu()}>
          Menu
        </button>
        <button data-testid='Rules Button' onClick={() => setRulesOpen(true)}>
          Rules
        </button>
      </div>
      {rulesOpen ? (
        <div id='game-rules' data-testid='Rules Modal'>
          <div className='container'>
            <p>Rules</p>
            <img id='rules-img' src={isGameModified ? imageRulesBonus : imageRules} alt='' />
            <img src={iconClose} alt='' id='close-btn' data-testid='Rules Close Button' onClick={() => setRulesOpen(false)} />
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Footer
