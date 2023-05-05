import { Link } from 'react-router-dom'

function Banner() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/about">A propos</Link>
    </nav>
  )
}

export default Banner