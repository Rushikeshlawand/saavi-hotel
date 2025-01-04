import React, { useState } from 'react'
import './carouselComponent.css'
// import Image from '../../assets/carouselData/image.png';
// import Image1 from '../../assets/carouselData/image1.png';
// import Image2 from '../../assets/carouselData/image2.png';
import Hotel1 from '../../assets/carouselData/hotel1.jpg'
import Hotel2 from '../../assets/carouselData/hotel2.jpg'
import Hotel3 from '../../assets/carouselData/hotel3.jpg'
import Hotel4 from '../../assets/carouselData/hotel4.jpg'
import Hotel5 from '../../assets/carouselData/hotel5.jpg'
import Hotel6 from '../../assets/carouselData/hotel6.jpg'
import Hotel7 from '../../assets/carouselData/hotel7.jpg'
import Hotel8 from '../../assets/carouselData/hotel8.jpg'

const carouselData = [
  {
    id: 1,
    image: Hotel1,
    title: 'Saavi Hotel Jibhi',
    description:
      'Relax by the scenic riverfront. Perfect for romantic evenings and peaceful retreats.'
  },
  {
    id: 2,
    image: Hotel2,
    title: 'Saavi Hotel Medicity',
    description:
      'Enjoy the serene beach view from our premium suites. Perfect for a relaxing getaway.'
  },
  {
    id: 3,
    image: Hotel3,
    title: 'Saavi Hotel Gold Course',
    description:
      'Stay amidst the tranquil mountains. Ideal for nature lovers and hikers. Breathe fresh air and rejuvenate your soul.'
  },
  {
    id: 4,
    image: Hotel8,
    title: 'Saavi Hotel Sector 46',
    description:
      'Experience the vibrant city life with our centrally located hotel. Great for business trips and city explorers.'
  },
  {
    id: 5,
    image: Hotel5,
    title: 'The Sandalwood By Saavi Hotel',
    description:
      'Relax by the scenic riverfront. Perfect for romantic evenings and peaceful retreats.'
  },
  {
    id: 6,
    image: Hotel6,
    title: 'Saavi Hotel Sector 10',
    description:
      'Admire the breathtaking sky views from your room. Ideal for stargazers and dreamers.'
  },
  {
    id: 7,
    image: Hotel7,
    title: 'Saavi Hotel Huda City Centre',
    description:
      'Escape to the peaceful countryside. Enjoy farm-to-table dining and serene landscapes. Great for family vacations.'
  },
  {
    id: 8,
    image: Hotel4,
    title: 'The Oyster Pearl By Saavi Hotel',
    description:
      'Discover downtown luxury with easy access to landmarks. Perfect for shopaholics and city adventurers.'
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
      <div className='title'>
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
