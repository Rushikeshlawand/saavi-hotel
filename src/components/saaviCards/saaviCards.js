import React, { useState, useEffect } from 'react'
import Card1 from '../../assets/guest/card1.png'
import './saaviCards.css'

const SaaviCards = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Card data with titles, descriptions, links, and images
  const cards = [
    {
      title: 'Join the Savi Family',
      description:
        'Partner with us to bring luxury hospitality to new heights.',
      link: 'Partner with Savi',
      image: Card1
    },
    {
      title: 'Elevate Your Corporate Events',
      description:
        'Experience world-class hospitality for your business events and meetings.',
      link: 'Get in touch',
      image: Card1
    },
    {
      title: 'Join Our Team',
      description: "Be part of a team that's redefining luxury hospitality.",
      link: 'Join us',
      image: Card1
    }
  ]

  return (
    <div className='saavi-cards-container'>
      {/* Cards container */}
      <div
        className={`saavi-cards ${
          windowWidth < 768 ? 'saavi-cards-column' : 'saavi-cards-row'
        }`}
      >
        {cards.map((card, index) => (
          <div className='saavi-card' key={index}>
            <h2 className='saavi-card-title'>{card.title}</h2>
            <p className='saavi-card-description'>{card.description}</p>
            <a className='saavi-card-link' href='/partner'>
              {card.link}
            </a>
            <img
              src={card.image}
              alt='Decoration'
              className='saavi-card-image'
            />
          </div>
        ))}
      </div>

      {/* Rectangle container below the cards */}
      <div
        className='saavi-rectangle-container'
        style={{
          backgroundImage: `url(${Card1})`
        }}
      >
        <div className='saavi-rectangle-overlay'></div>
      </div>
    </div>
  )
}

export default SaaviCards
