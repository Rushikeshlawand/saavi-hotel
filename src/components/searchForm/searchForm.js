import React, { useState, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './searchForm.css';

const SearchForm = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locationDropdownVisible, setLocationDropdownVisible] = useState(false);
  const [guestsDropdownVisible, setGuestsDropdownVisible] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  const locationDropdownRef = useRef(null);
  const guestsDropdownRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        locationDropdownRef.current &&
        !locationDropdownRef.current.contains(event.target)
      ) {
        setLocationDropdownVisible(false);
      }
      if (
        guestsDropdownRef.current &&
        !guestsDropdownRef.current.contains(event.target)
      ) {
        setGuestsDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    setLocationDropdownVisible(false);
  };

  const increaseCount = (type) => {
    if (type === 'adult') setAdultCount(adultCount + 1);
    if (type === 'child') setChildCount(childCount + 1);
  };

  const decreaseCount = (type) => {
    if (type === 'adult' && adultCount > 0) setAdultCount(adultCount - 1);
    if (type === 'child' && childCount > 0) setChildCount(childCount - 1);
  };

  const renderGuestLabel = () => {
    if (adultCount === 0 && childCount === 0) {
      return 'Guest'; // Default label
    }
    return `${adultCount} Adult${adultCount > 1 ? 's' : ''}, ${childCount} Child${childCount > 1 ? 'ren' : ''}`;
  };

  return (
    <div className="search-form-container">
      <form className="search-form">
        {/* Location Dropdown */}
        <div className="form-group" ref={locationDropdownRef}>
          <label>Location</label>
          <div className="dropdown-wrapper">
            <div
              className="dropdown-toggle"
              onClick={() => setLocationDropdownVisible(!locationDropdownVisible)}
            >
              {selectedLocation ? selectedLocation.label : 'Where to go?'}
            </div>
            <div
              className={`dropdown-menu ${
                locationDropdownVisible ? 'show' : ''
              }`}
            >
              {['New York', 'Paris', 'Tokyo', 'Sydney'].map((location) => (
                <div
                  key={location}
                  className="dropdown-item"
                  onClick={() => handleLocationChange({ label: location })}
                >
                  {location}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Check-In Date Picker */}
        <div className="form-group">
          <label>Check-In</label>
          <DatePicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            className="date-picker"
            placeholderText="Select Check-In Date"
          />
        </div>

        {/* Check-Out Date Picker */}
        <div className="form-group">
          <label>Check-Out</label>
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            className="date-picker"
            placeholderText="Select Check-Out Date"
          />
        </div>

        {/* Guests and Room Dropdown */}
        <div className="form-group" ref={guestsDropdownRef}>
          <label>Guests and Room</label>
          <div className="dropdown-wrapper">
            <div
              className="dropdown-toggle"
              onClick={() => setGuestsDropdownVisible(!guestsDropdownVisible)}
            >
              {renderGuestLabel()}
            </div>
            <div
              className={`dropdown-menu ${
                guestsDropdownVisible ? 'show' : ''
              }`}
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
                  <span>{adultCount}</span>
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
                  <span>{childCount}</span>
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
  );
};

export default SearchForm;
