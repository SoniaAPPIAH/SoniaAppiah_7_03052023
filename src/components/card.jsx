import Appartment from '../data/accommodation.json'
import { Link } from 'react-router-dom'
import '../styles/card.css'

function Card() {
  return (
    <div className="cardArea">
      {Appartment.map((apartment) => (
        <Link
          key={apartment.id}
          to={`/accomodation/${apartment.id}`}
          className="card"
        >
          <img
            src={apartment.cover}
            alt={apartment.title}
            className="cardCover"
          />
          <p className="cardTitle">{apartment.title}</p>
        </Link>
      ))}
    </div>
  )
}

export default Card
