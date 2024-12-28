import React, { useState, useEffect } from 'react'
import './heroSection.css'
import SearchForm from "../searchForm/searchForm"

const HeroSection = () => {
  const images = [
    require('../../assets/homepage/homepage.png'),
    require('../../assets/homepage/homepage2.png'),
    require('../../assets/homepage/homepage3.png')
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length)
    }, 5000) 

    return () => clearInterval(interval) 
  }, [images.length])

  return (
    <section
      className='hero-section'
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className='hero-content'>
        <h1>Experience the Saavi Difference</h1>
      </div>
      <div className='searchform'>
        <SearchForm/>
      </div>
    </section>
  )
}

export default HeroSection;