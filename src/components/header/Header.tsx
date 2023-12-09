type Props = {
  points: number
  src: string
}

const Header: React.FC<Props> = ({ points, src }) => {
  return (
    <header id='points-container'>
      <div id='points-img-container'>
        <img data-testid='Header Logo Img' src={src} alt='' />
      </div>
      <div id='score-container'>
        <p id='score'>Score</p>
        <p id='points' data-testid='Points Text'>
          {points}
        </p>
      </div>
    </header>
  )
}

export default Header
