import { useState } from 'react'
import flecheHaut from '../assets/flecheHaut.svg'
import flecheBas from '../assets/flecheBas.svg'

const Collapse = (props) => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div className="collapse">
      <div className="collapseTitle" onClick={() => setIsOpen(!isOpen)}>
        <p>{props.title}</p>
        {isOpen ? (
          <img src={flecheBas} alt="flèche bas" className="collapseArrow" />
        ) : (
          <img src={flecheHaut} alt="flèche haut" className="collapseArrow" />
        )}
      </div>
      {isOpen ? null : <div className="collapseText">{props.text}</div>}
    </div>
  )
}

export default Collapse
