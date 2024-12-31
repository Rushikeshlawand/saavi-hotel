import React from 'react'
import './perfectGateway.css'
import Nature from '../../assets/perfectGateway/natureImage.png'
import TastyFood from '../../assets/perfectGateway/tastyFood.png'
import LuxuaryRoom from '../../assets/perfectGateway/luxuaryRoom.png'
function PerfectGateway () {
  return (
    
    <div className='perfectGateway-container'>
      <header className='perfectGateway-header'>
        <h1>Your Perfect Getaway</h1>
        <p>Experience the Best of Nature and Luxury</p>
      </header>
      <div className='perfectGateway-content-wrapper'>
        <div className='perfectGateway-content'>
          {/* Original Cards */}
          <div className='perfectGateway-card-image'>
            <img
              src={Nature}
              alt='Nature'
              className='perfectGateway-card-image'
            />
            <div className='perfectGateway-card-title'>Nature</div>
          </div>
          <div className='perfectGateway-card-text perfectGateway-luxury-room'>
            <div className='perfectGateway-card-content'>
              <h2>Cozy Comfort, Modern Convenience</h2>
              <p>
                The interiors blend seamless comfort with modern amenities,
                infusing Native influences to bring the natural beauty of the
                great outdoors inside.
              </p>
            </div>
          </div>
          <div className='perfectGateway-card-image luxuaryRoom'>
            <img
              src={LuxuaryRoom}
              alt='Luxuary Room'
              className='perfectGateway-card-image'
            />
            <div className='perfectGateway-card-title'>Luxuary Room</div>
          </div>
          <div className='perfectGateway-easy-access'>
            <div className='perfectGateway-easy-accessInner'>
              <h2>Easy Access, Stunning Views</h2>
              <p>
                Easy access to visit stunning Jalori Pass, located in Kullu
                District at a distance of about 520 kilometers from Delhi, 150
                kilometers from Shimla, and 60 kilometers from Mandi.
              </p>
            </div>
          </div>
          <div className='perfectGateway-card-image TastyFoods'>
            <img
              src={TastyFood}
              alt='Tasty Foods'
              className='perfectGateway-card-image'
            />
            <div className='perfectGateway-card-title'>Tasty Foods</div>
          </div>
          <div className='perfectGateway-card-type4'>
            <div className='perfectGateway-card-type4-inner'>
              <h2>Culinary Delights</h2>
              <p>
                Indulge your senses with a culinary journey that celebrates
                local flavors and fresh ingredients. Our menu boasts a diverse
                range of dishes, from traditional favorites to innovative
                creations.
              </p>
            </div>
          </div>

          {/* Duplicate Cards */}
          <div className='perfectGateway-card-image'>
            <img
              src={Nature}
              alt='Nature'
              className='perfectGateway-card-image'
            />
            <div className='perfectGateway-card-title'>Nature</div>
          </div>
          <div className='perfectGateway-card-text perfectGateway-luxury-room'>
            <div className='perfectGateway-card-content'>
              <h2>Cozy Comfort, Modern Convenience</h2>
              <p>
                The interiors blend seamless comfort with modern amenities,
                infusing Native influences to bring the natural beauty of the
                great outdoors inside.
              </p>
            </div>
          </div>
          <div className='perfectGateway-card-image luxuaryRoom'>
            <img
              src={LuxuaryRoom}
              alt='Luxuary Room'
              className='perfectGateway-card-image'
            />
            <div className='perfectGateway-card-title'>Luxuary Room</div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default PerfectGateway
