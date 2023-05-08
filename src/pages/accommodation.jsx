import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Accommodations from '../data/accommodation.json'

const Accommodation = () => {
  const { accommodationId } = useParams()
  const thisAccommodation = Accommodations.find(
    (accommodation) => accommodation.id === accommodationId
  )

  if (!thisAccommodation) {
    return <Navigate to="*" />
  } else {
    return (
      <div>
        <div className="content-logement">
          <div className="location">
            <h1>{thisAccommodation.title}</h1>
            <p>{thisAccommodation.location}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Accommodation
