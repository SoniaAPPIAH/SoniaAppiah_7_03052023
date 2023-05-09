import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Accommodations from '../data/accommodation.json'
import Carrousel from '../components/carrousel.jsx'
import Collapse from '../components/collapse.jsx'
import '../styles/accommodation.css'
import starRed from '../assets/starRed.svg'
import starGrey from '../assets/starGrey.svg'

const Accommodation = () => {
  const { accommodationId } = useParams()
  const Accommodation = Accommodations.find(
    (accommodation) => accommodation.id === accommodationId
  )

  if (!Accommodation) {
    return <Navigate to="*" />
  } else {
    return (
      <div>
        <Carrousel Accommodation={Accommodation} />
        <div className="accommodationDescription">
          <div className="accommodationLeft">
            <div>
              <h1>{Accommodation.title}</h1>
              <h2>{Accommodation.location}</h2>
            </div>
            <div className="accommodationTag">
              {Accommodation.tags.map((tag, index) => (
                <p key={index}>{tag}</p>
              ))}
            </div>
          </div>
          <div className="accommodationRight">
            <div className="accommodationProfil">
              <p>{Accommodation.host.name}</p>
              <img
                src={Accommodation.host.picture}
                alt={Accommodation.host.name}
              />
            </div>
            <div className="accommodationStar">
              {[...Array(parseInt(Accommodation.rating))].map((star) => (
                <img src={starRed} alt="etoile rouge" key={star} />
              ))}
              {[...Array(5 - parseInt(Accommodation.rating))].map((star) => (
                <img src={starGrey} alt="etoile gris" key={star} />
              ))}
            </div>
          </div>
        </div>
        <div className="accommodationCollapse">
          <div className="collapseItem1">
            <Collapse
              title="Description"
              text={<p>{Accommodation.description}</p>}
            />
          </div>
          <div className="collapseItem2">
            <Collapse
              title="Equipements"
              text={Accommodation.equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Accommodation
