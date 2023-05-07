import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
import '../styles/header.css'

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo Kasa" className="headerLogo" />
      <nav className="navBar">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </nav>
    </header>
  )
}

export default Header
