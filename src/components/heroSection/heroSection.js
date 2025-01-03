import React, { useState, useEffect, useRef } from 'react';
import './heroSection.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const HeroSectionWithSearch = () => {
  const images = [
    require('../../assets/homepage/homapage7.png'),
    require('../../assets/homepage/homapage7.png'),
    require('../../assets/homepage/homepage6.png'),
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [destinationDropdownVisible, setDestinationDropdownVisible] = useState(false);
  const [peopleDropdownVisible, setPeopleDropdownVisible] = useState(false);
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [departureDate, setDepartureDate] = useState(null);
  const [adultNumber, setAdultNumber] = useState(0);
  const [childNumber, setChildNumber] = useState(0);

  // References for dropdowns
  const peopleDropdownRef = useRef(null);
  const destinationDropdownRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    // Close dropdowns if clicked outside
    const handleClickOutside = (event) => {
      if (
        peopleDropdownRef.current && 
        !peopleDropdownRef.current.contains(event.target) && 
        !event.target.closest('.dropdown-toggle') // Ensure it doesn't close when toggling the dropdown
      ) {
        setPeopleDropdownVisible(false);
      }

      if (
        destinationDropdownRef.current && 
        !destinationDropdownRef.current.contains(event.target) && 
        !event.target.closest('.dropdown-toggle-destination') // Ensure it doesn't close when toggling the dropdown
      ) {
        setDestinationDropdownVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      clearInterval(interval); // Cleanup on unmount
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleDestinationChange = (destination) => {
    setSelectedDestination(destination);
    setDestinationDropdownVisible(false);
  };

  const increaseCount = (type) => {
    if (type === 'adult') setAdultNumber(adultNumber + 1);
    if (type === 'child') setChildNumber(childNumber + 1);
  };

  const decreaseCount = (type) => {
    if (type === 'adult' && adultNumber > 0) setAdultNumber(adultNumber - 1);
    if (type === 'child' && childNumber > 0) setChildNumber(childNumber - 1);
  };

  const renderPeopleLabel = () => {
    const totalPeople = adultNumber + childNumber;
    return totalPeople === 0
      ? 'Guest'
      : `${totalPeople} Guest${totalPeople > 1 ? 's' : ''}`;
  };

  const handleArrivalDateChange = (date) => {
    setArrivalDate(date);
    if (departureDate && date >= departureDate) {
      setDepartureDate(null);
    }
  };

  const handleDepartureDateChange = (date) => {
    setDepartureDate(date);
  };

  return (
    <section className="hero-section">
      {images.map((image, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="searchform">
        <div className="hero-content">
          <h1>Experience the Saavi Difference</h1>
        </div>
        <form className="search-form">
          {/* Destination Dropdown */}
          <div className="form-group">
            <div className="dropdown-wrapper">
              <div
                className="dropdown-toggle-destination"
                onClick={() => setDestinationDropdownVisible(!destinationDropdownVisible)}
              >
                {selectedDestination ? selectedDestination.label : 'Where to go?'}
              </div>
              <div
                ref={destinationDropdownRef}
                className={`dropdown-menu ${destinationDropdownVisible ? 'show' : ''}`}
              >
                {['New York', 'Paris', 'Tokyo', 'Sydney'].map((destination) => (
                  <div
                    key={destination}
                    className="dropdown-item"
                    onClick={() => handleDestinationChange({ label: destination })}
                  >
                    {destination}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Arrival Date Picker */}
          <div className="form-group">
            <DatePicker
              selected={arrivalDate}
              onChange={handleArrivalDateChange}
              className="date-picker"
              placeholderText="Select Arrival Date"
              minDate={new Date()}
            />
          </div>

          {/* Departure Date Picker */}
          <div className="form-group">
            <DatePicker
              selected={departureDate}
              onChange={handleDepartureDateChange}
              className="date-picker"
              placeholderText="Select Departure Date"
              minDate={arrivalDate ? new Date(arrivalDate.getTime() + 24 * 60 * 60 * 1000) : new Date()}
            />
          </div>

          {/* People Dropdown */}
          <div className="form-group">
            <div className="dropdown-wrapper-guest">
              <div
                className="dropdown-toggle"
                onClick={() => setPeopleDropdownVisible(!peopleDropdownVisible)}
              >
                {renderPeopleLabel()}
              </div>
              <div
                ref={peopleDropdownRef}
                className={`dropdown-menu ${peopleDropdownVisible ? 'show' : ''}`}
              >
                <div className="dropdown-item">
                  <span>Adults</span>
                  <div className="counter-controls">
                    <button
                      type="button"
                      className="counter-btn"
                      onClick={() => decreaseCount('adult')}
                    >
                      -
                    </button>
                    <span>{adultNumber}</span>
                    <button
                      type="button"
                      className="counter-btn"
                      onClick={() => increaseCount('adult')}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="dropdown-item">
                  <span>Children</span>
                  <div className="counter-controls">
                    <button
                      type="button"
                      className="counter-btn"
                      onClick={() => decreaseCount('child')}
                    >
                      -
                    </button>
                    <span>{childNumber}</span>
                    <button
                      type="button"
                      className="counter-btn"
                      onClick={() => increaseCount('child')}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSectionWithSearch;
