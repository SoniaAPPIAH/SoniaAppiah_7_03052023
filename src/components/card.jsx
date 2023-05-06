import Appartment from '../data/accommodation.json'
import { Link } from 'react-router-dom'

function Card() {
  return (
    <div>
      {Appartment.map((apartment) => (
        <Link key={apartment.id} to={`/accomodation/${apartment.id}`}>
          <img src={apartment.cover} alt={apartment.title} />
          <p>{apartment.title}</p>
        </Link>
      ))}
    </div>
  )
}

export default Card
