import React, { useState, useEffect } from 'react';
import './bookButton.css';
import buildingDesign from '../../assets/bookNow/buildingBlock1.png';
import buildingDesign2 from '../../assets/bookNow/buildingBlock2.png';
import BoyImage from '../../assets/bookNow/boyImage.png';
import GirlImage from '../../assets/bookNow/girlImage.png';
import Salman1 from '../../assets/bookNow/salman1.png';
import Salman2 from '../../assets/bookNow/salman2.png';

const BookButton = () => {
  const [showSalmanImages, setShowSalmanImages] = useState(false);

  useEffect(() => {
    // Set up an interval to toggle the images every 5 minutes (300,000 ms)
    const interval = setInterval(() => {
      setShowSalmanImages((prev) => !prev); // Toggle the state
    }, 2000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='forEmptyspace'>
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
      {/* Conditional rendering for boy and girl images or Salman images */}
      {showSalmanImages ? (
        <>
          {/* Salman images */}
          <img src={Salman1} alt='Salman 1' className='boy-image' />
          <img src={Salman2} alt='Salman 2' className='girl-image' />
        </>
      ) : (
        <>
          {/* Boy and Girl images */}
          <img src={BoyImage} alt='Boy' className='boy-image' />
          <img src={GirlImage} alt='Girl' className='girl-image' />
        </>
      )}

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
    </div>
  );
};

export default BookButton;
