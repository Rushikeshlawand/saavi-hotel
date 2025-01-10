import React, { useState } from 'react'
import './carouselComponent.css'
// import Image from '../../assets/carouselData/image.png';
// import Image1 from '../../assets/carouselData/image1.png';
// import Image2 from '../../assets/carouselData/image2.png';
import Hotel1 from '../../assets/carouselData/hotel1.jpg'
import Hotel5 from '../../assets/carouselData/hotel5.jpg'
import Hotel6 from '../../assets/carouselData/hotel6.jpg'
import Hotel7 from '../../assets/carouselData/hotel7.jpg'
import Hotel8 from '../../assets/carouselData/hotel8.jpg'

const carouselData = [
  {
    id: 1,
    image:Hotel5 ,
    title: 'Saavi Hotel Jibhi',
    description:
      'Relax by the scenic riverfront. Perfect for romantic evenings and peaceful retreats.'
  },
  {
    id: 5,
    image: Hotel1  ,
    title: 'The Sandalwood By Saavi Hotel',
    description:
      'Relax by the scenic riverfront. Perfect for romantic evenings and peaceful retreats.'
  },
  {
    id: 6,
    image: Hotel7,
    title: 'Saavi Hotel Sector 10',
    description:
      'Admire the breathtaking sky views from your room. Ideal for stargazers and dreamers.'
  },
  {
    id: 7,
    image: Hotel6,
    title: 'Saavi Hotel Huda City Centre',
    description:
      'Escape to the peaceful countryside. Enjoy farm-to-table dining and serene landscapes.'
  },
  {
    id: 8,
    image: Hotel8 ,
    title: 'The Oyster Pearl By Saavi Hotel',
    description:
      'Discover downtown luxury with easy access to landmarks.'
  }
]

const CarouselComponent = () => {
  const [startIndex, setStartIndex] = useState(0)

  const handleNext = () => {
    if (startIndex + 4 < carouselData.length) {
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
      <div className='wholeComponent'>
        <h2>Experience Saavi Hospitality</h2>
        <div className='carouselContainer'>
          <button className='carouselButton left' onClick={handlePrev}>
            &#8249;
          </button>
          <div className='saaviCards'>
            {carouselData.slice(startIndex, startIndex + 4).map(item => (
              <div key={item.id} className='card'>
                <img src={item.image} alt={item.title} className='cardImage' />
                <div className='cardInfo'>
                  <div className='cardHeader'>
                    <span className='cardTitle'>{item.title}</span>
                    <button className='bookNowButton'>Book Now</button>
                  </div>

                  <div className='cardDescription'>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className='carouselButton right' onClick={handleNext}>
            &#8250;
          </button>
        </div>
      </div>
    </div>
  )
}

export default CarouselComponent
