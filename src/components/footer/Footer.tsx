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
        <button onClick={() => returnToMenu()}>Menu</button>
        <button onClick={() => setRulesOpen(true)}>Rules</button>
      </div>
      {rulesOpen ? (
        <div id='game-rules'>
          <div className='container'>
            <p>Rules</p>
            <img id='rules-img' src={isGameModified ? imageRulesBonus : imageRules} alt='' />
            <img src={iconClose} alt='' id='close-btn' onClick={() => setRulesOpen(false)} />
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Footer
