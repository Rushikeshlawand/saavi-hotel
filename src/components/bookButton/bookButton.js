import React from 'react'
import './bookButton.css'
import buildingDesign from '../../assets/bookNow/buildingBlock1.png'
import buildingDesign2 from '../../assets/bookNow/buildingBlock2.png'
import BoyImage from '../../assets/bookNow/boyImage.png'
import GirlImage from '../../assets/bookNow/girlImage.png'

const BookButton = () => {
  return (
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
      {/* Boy image on the left */}
      <img src={BoyImage} alt='Boy' className='boy-image' />
      {/* Girl image on the right */}
      <img src={GirlImage} alt='Girl' className='girl-image' />

      <div className='content'>
        <div className='bookText'>
          <h4>Book Your</h4>
          <div>
            <h1>Dream Vacation Now</h1>
          </div>
        </div>
        <div className='book-button'>
          <button className='book-now-btn'>Book Now</button>
        </div>
      </div>
    </div>
  )
}

export default BookButton
