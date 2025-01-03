import React, { useState, useEffect } from 'react';
import './heroSection.css';
import SearchForm from "../searchForm/searchForm";

const HeroSection = () => {
  const images = [
    require('../../assets/homepage/homapage7.png'),
    require('../../assets/homepage/homapage7.png'),
    require('../../assets/homepage/homepage6.png'),
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <section className="hero-section">
      {images.map((image, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="hero-content">
        <h1>Experience the Saavi Difference</h1>
      </div>
      <div className="searchform">
        <SearchForm />
      </div>
    </section>
  );
};

export default HeroSection;
