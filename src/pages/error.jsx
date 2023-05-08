import { NavLink } from 'react-router-dom'
import '../styles/error.css'

function Error() {
  return (
    <div className="error">
      <div className="errorText">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
      </div>
      <NavLink to="/" className="errorLink">
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  )
}

export default Error
