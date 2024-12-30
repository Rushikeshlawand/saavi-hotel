import React, { useState } from 'react'
import './carouselComponent.css'
import Image from '../../assets/carouselData/image.png'
import Image1 from '../../assets/carouselData/image1.png'
import Image2 from '../../assets/carouselData/image2.png'

const carouselData = [
  {
    id: 1,
    image: Image,
    title: 'Saavi Hotel Golf Course',
    rating: 4.8,
    reviews: 145
  },
  {
    id: 2,
    image: Image1,
    title: 'Saavi Hotel Golf Course',
    rating: 4.8,
    reviews: 145
  },
  {
    id: 3,
    image: Image2,
    title: 'Saavi Hotel Golf Course',
    rating: 4.8,
    reviews: 145
  },
  {
    id: 4,
    image: Image,
    title: 'Saavi Hotel Beach View',
    rating: 4.7,
    reviews: 120
  },
  {
    id: 5,
    image: Image1,
    title: 'Saavi Hotel Mountain View',
    rating: 4.9,
    reviews: 200
  }
]

const CarouselComponent = () => {
  const [startIndex, setStartIndex] = useState(0)

  const handleNext = () => {
    if (startIndex + 3 < carouselData.length) {
      setStartIndex(startIndex + 1)
    }
  }

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1)
    }
  }

  return (
    <div className='backgroundImg'>
      <div className='title'>
        <h2>Experience Saavi Hospitality</h2>
        <div className='carousel-container'>
          <button className='carousel-button left' onClick={handlePrev}>
            &#8249;
          </button>
          <div className='saaviCard'>
            {carouselData.slice(startIndex, startIndex + 3).map(item => (
              <div key={item.id} className='card'>
                <img src={item.image} alt={item.title} />
                <div className='info'>
                  <h3 className='title-with-rating'>
                    <span>{item.title}</span>
                    <span className='star'>★</span>
                    <span className='rating'>{item.rating}</span>
                    <span className='rating'>|</span>
                    <span className='reviews'>Reviews: {item.reviews}</span>
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <button className='carousel-button right' onClick={handleNext}>
            &#8250;
          </button>
        </div>
      </div>
    </div>
  )
}

export default CarouselComponent
