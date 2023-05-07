import logo from '../assets/logoBlanc.svg'
import '../styles/footer.css'

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo Kasa Footer" className="footerLogo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
