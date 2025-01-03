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
      <div className='movingContent-wrapper'>
        <div className='movingContent'>
          {/* Original Cards */}
          <div className='card-type-1'>
            <img src={Nature} alt='Nature' className='card-type-1' />
            <div className='perfectGateway-card-title'>Nature</div>
          </div>
          <div className='card-type-2 perfectGateway-luxury-room'>
            <div className='perfectGateway-card-content'>
              <h2>Cozy Comfort, Modern Convenience</h2>
              <p>
                The interiors blend seamless comfort with modern amenities,
                infusing Native influences to bring the natural beauty of the
                great outdoors inside.
              </p>
            </div>
          </div>
          <div className='card-type-1 luxuaryRoom'>
            <img src={LuxuaryRoom} alt='Luxuary Room' className='card-type-1' />
            <div className='perfectGateway-card-title'>Luxuary Room</div>
          </div>
          <div className='card-type-3'>
            <div className='card-type-3Inner'>
              <h2>Easy Access, Stunning Views</h2>
              <p>
                Easy access to visit stunning Jalori Pass, located in Kullu
                District at a distance of about 520 kilometers from Delhi, 150
                kilometers from Shimla, and 60 kilometers from Mandi.
              </p>
            </div>
          </div>
          <div className='card-type-1 TastyFoods'>
            <img src={TastyFood} alt='Tasty Foods' className='card-type-1' />
            <div className='perfectGateway-card-title'>Tasty Foods</div>
          </div>
          <div className='card-type-4'>
            <div className='card-type-4-inner'>
              <h2>Culinary Delights</h2>
              <p>
                Indulge your senses with a culinary journey that celebrates
                local flavors and fresh ingredients. Our menu boasts a diverse
                range of dishes, from traditional favorites to innovative
                creations.Indulge your senses with a culinary journey that celebrates
                local flavors and fresh ingredients. 
                Indulge your senses with a culinary journey that celebrates
                local flavors and fresh ingredients. 
              </p>
            </div>
          </div>

          {/* Duplicate Cards */}
          <div className='card-type-1'>
            <img
              src={Nature}
              alt='Nature'
              className='card-type-1'
            />
            <div className='perfectGateway-card-title'>Piece</div>
          </div>
          <div className='card-type-2 perfectGateway-luxury-room'>
            <div className='perfectGateway-card-content'>
              <h2>Cozy Comfort, Modern Convenience</h2>
              <p>
                The interiors blend seamless comfort with modern amenities,
                infusing Native influences to bring the natural beauty of the
                great outdoors inside.
              </p>
            </div>
          </div>
          <div className='card-type-1 luxuaryRoom'>
            <img
              src={LuxuaryRoom}
              alt='Luxuary Room'
              className='card-type-1'
            />
            <div className='perfectGateway-card-title'>Hotel's Room</div>
          </div>
          
          <div className='card-type-1'>
            <img src={Nature} alt='Nature' className='card-type-1' />
            <div className='perfectGateway-card-title'>Chill</div>
          </div>
          <div className='card-type-2 perfectGateway-luxury-room'>
            <div className='perfectGateway-card-content'>
              <h2>Cozy Comfort, Modern Convenience</h2>
              <p>
                The interiors blend seamless comfort with modern amenities,
                infusing Native influences to bring the natural beauty of the
                great outdoors inside.
              </p>
            </div>
          </div>
          <div className='card-type-1 TastyFoods'>
            <img src={TastyFood} alt='Tasty Foods' className='card-type-1' />
            <div className='perfectGateway-card-title'> Foods</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerfectGateway
