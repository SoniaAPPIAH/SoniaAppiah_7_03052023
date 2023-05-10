import { useState } from 'react'
import arrowUp from '../assets/arrowUp.svg'
import arrowDown from '../assets/arrowDown.svg'

const Collapse = (props) => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div>
      <div className="collapseTitle" onClick={() => setIsOpen(!isOpen)}>
        <p>{props.title}</p>
        {isOpen ? (
          <img src={arrowDown} alt="flèche bas" className="collapseArrow" />
        ) : (
          <img src={arrowUp} alt="flèche haut" className="collapseArrow" />
        )}
      </div>
      {isOpen ? null : <div className="collapseText">{props.text}</div>}
    </div>
  )
}

export default Collapse
