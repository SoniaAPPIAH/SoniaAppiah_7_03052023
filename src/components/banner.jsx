import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
import '../styles/banner.css'

function Banner() {
  return (
    <header className="banner">
      <img src={logo} alt="Logo Kasa" className="bannerLogo" />
      <nav className="navBar">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </nav>
    </header>
  )
}

export default Banner
