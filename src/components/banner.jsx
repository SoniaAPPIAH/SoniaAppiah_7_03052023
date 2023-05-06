import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import '../styles/banner.css'

function Banner() {
  return (
    <header className="banner">
      <img src={logo} alt="Logo Kasa" className="logoKasa" />
      <nav className="navBar">
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </header>
  )
}

export default Banner
