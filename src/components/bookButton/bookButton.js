import React from 'react'
import './bookButton.css'
import buildingDesign from '../../assets/bookNow/buildingBlock1.png'
import buildingDesign2 from '../../assets/bookNow/buildingBlock2.png'

const BookButton = () => {
  return (
    <div>
      <div className='background'>
        <img
          src={buildingDesign}
          alt='Building Design'
          className='background-image'
        />
        <img
          src={buildingDesign2}
          alt='Building Design'
          className='background-image2'
        />
      </div>
      <div className='bookText'>
        <label>Book Your</label>
        <div>
          <label>Dream Vacation Now</label>
        </div>
      </div>
      <div className='book-button'>
        <button className='book-button'>Book Now</button>
      </div>
    </div>
  )
}

export default BookButton;
