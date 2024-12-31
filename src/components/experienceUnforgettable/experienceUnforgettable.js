import React from 'react'
import './experienceUnforgettable.css'
import image from '../../assets/adventure/adventureImage.png'

const ExperienceUnforgettable = () => {
  return (
    <div className='forbackground'>
    <div className='adventure-container'>
      <div className='header-section'>
        <h1>Experience Unforgettable</h1>
      </div>
      <div className='image-section'>
        <img src={image} alt='Adventure' />
        <div className='overlay'>
          <h2>ADVENTURES</h2>
          <button className='explore-button'>Explore</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceUnforgettable
