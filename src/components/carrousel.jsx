import { useState } from 'react'
import arrowLeft from '../assets/arrowLeft.svg'
import arrowRight from '../assets/arrowRight.svg'
import '../styles/carrousel.css'

const Carrousel = ({ Accommodation }) => {
  const [current, setcurrent] = useState(0)
  const length = Accommodation.pictures.length

  const nextSlide = () => {
    setcurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setcurrent(current === 0 ? length - 1 : current - 1)
  }

  const showArray = length === 1 ? true : false

  if (
    !Array.isArray(Accommodation.pictures) ||
    Accommodation.pictures.length <= 0
  ) {
    return null
  }

  return (
    <div className="carrousel">
      {!showArray ? (
        <div>
          <img
            onClick={prevSlide}
            className="arrowLeft"
            src={arrowLeft}
            alt="flèche gauche"
          />
          <img
            onClick={nextSlide}
            className="arrowRight"
            src={arrowRight}
            alt="flèche droite"
          />
        </div>
      ) : null}
      {Accommodation.pictures.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide} alt="logement" className="images" />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Carrousel
