import React, { useState } from 'react';
import Profile1 from '../../assets/guest/profile1.png';
import './Guest.css';

const Guest = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      content:
        'Saavi Hotel Huda City Center exceeded all my expectations. The location was perfect.',
      author: 'Ms. Priya Desai',
      image: Profile1,
    },
    {
      id: 2,
      content:
        'The service was impeccable, & the staff went out of their way to ensure a comfortable stay.',
      author: 'Mr. Rahul Sharma',
      image: Profile1,
    },
    {
      id: 3,
      content:
        'The food at Saavi Hotel was beyond delicious. I would recommend this place to any foodie.',
      author: 'Ms. Aarti Patel',
      image: Profile1,
    },
    {
      id: 4,
      content:
        'A perfect getaway spot. The rooms were spacious and clean, and the atmosphere was relaxing.',
      author: 'Mr. Vishal Kapoor',
      image: Profile1,
    },
    {
      id: 5,
      content:
        'Unforgettable stay! The staff was warm, and the attention to detail was remarkable. .',
      author: 'Ms. Sneha Roy',
      image: Profile1,
    },
    {
      id: 6,
      content:
        'The location was ideal for exploring the city, and the hotel amenities were top-notch.',
      author: 'Mr. Arjun Mehta',
      image: Profile1,
    },
    {
      id: 7,
      content:
        'From the cozy rooms to the delicious breakfast, everything was perfect. Will definitely return.',
      author: 'Ms. Kavita Nair',
      image: Profile1,
    },
    {
      id: 8,
      content:
        'Exceptional service and a truly luxurious experience. Felt like royalty throughout my stay.',
      author: 'Mr. Rohan Gupta',
      image: Profile1,
    },
    {
      id: 9,
      content:
        'The rooftop view was breathtaking! The ambiance made it a memorable stay for my family.',
      author: 'Ms. Shalini Singh',
      image: Profile1,
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < 3; i++) {
      visibleCards.push(testimonials[(activeIndex + i) % testimonials.length]);
    }
    return visibleCards;
  };

  return (
    <div className='guest-container'>
      {/* Header */}
      <header className='guest-header'>
        <h1 className='guest-header-title'>What Our Guests Say</h1>
        <p className='guest-header-subtitle'>Hear from our satisfied travelers</p>
      </header>

      {/* Testimonials Display */}
      <div className='guest-testimonials'>
        <div className='guest-cards-container'>
          {getVisibleCards().map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`guest-card ${index === 0 ? 'active' : ''}`}
            >
              <img
                src={testimonial.image}
                alt={`Author ${testimonial.id}`}
                className='guest-card-image'
              />
              <p className='guest-card-content'>{testimonial.content}</p>
              <p className='guest-card-author'>{testimonial.author}</p>
              <div className='guest-card-stars'>
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <span key={starIndex} className='guest-star'>
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation (Arrows + Dots) */}
      <div className='guest-navigation'>
        <button onClick={handlePrev} className='guest-nav-button'>
          &#9664;
        </button>
        <div className='guest-dots'>
          {Array.from({ length: testimonials.length }).map((_, index) => (
            <span
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`guest-dot ${index === activeIndex ? 'active' : ''}`}
            ></span>
          ))}
        </div>
        <button onClick={handleNext} className='guest-nav-button'>
          &#9654;
        </button>
      </div>

      {/* Subscription Section */}
      <div className='guest-subscription'>
        <div className='guest-overlay'></div>
        <div className='guest-subscription-content'>
          <h2 className='guest-subscription-title'>Unlock Exclusive Offers</h2>
          <p className='guest-subscription-text'>
            Only the best deals reach your inbox.
          </p>
        </div>
        <div className='guest-subscription-form'>
          <input
            type='email'
            placeholder='Enter your email address'
            className='guest-input'
          />
          <button className='guest-button'>Notify Me</button>
        </div>
      </div>
    </div>
  );
};

export default Guest;
