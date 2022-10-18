import { logoBonus, logo } from '../../assets/assets'

type Props = {
  isGameModified: boolean | undefined
  points: number
}

const Header: React.FC<Props> = ({ isGameModified, points }) => {
  return (
    <header id='points-container'>
      <div id='points-img-container'>
        <img src={isGameModified ? logoBonus : logo} alt='' />
      </div>
      <div id='score-container'>
        <p id='score'>Score</p>
        <p id='points'>{points}</p>
      </div>
    </header>
  )
}

export default Header
