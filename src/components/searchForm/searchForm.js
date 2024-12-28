import React, { useState } from 'react';
import './searchForm.css';

const SearchForm = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedGuests, setSelectedGuests] = useState(null);
  const [locationDropdownVisible, setLocationDropdownVisible] = useState(false);
  const [guestsDropdownVisible, setGuestsDropdownVisible] = useState(false);

  const locations = [
    { value: 'new-york', label: 'New York' },
    { value: 'paris', label: 'Paris' },
    { value: 'tokyo', label: 'Tokyo' },
    { value: 'sydney', label: 'Sydney' },
  ];

  const guestsRooms = [
    { value: '1-1', label: '1 guest, 1 room' },
    { value: '2-1', label: '2 guests, 1 room' },
    { value: '2-2', label: '2 guests, 2 rooms' },
    { value: '3-2', label: '3 guests, 2 rooms' },
  ];

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    setLocationDropdownVisible(false);
  };

  const handleGuestsChange = (option) => {
    setSelectedGuests(option);
    setGuestsDropdownVisible(false);
  };

  return (
    <div className="search-form-container">
      <form className="search-form">
        {/* Location Dropdown */}
        <div className="form-group">
          <label>Location</label>
          <div className="dropdown-wrapper">
            <div
              className="dropdown-toggle"
              onClick={() => setLocationDropdownVisible(!locationDropdownVisible)}
            >
              {selectedLocation ? selectedLocation.label : 'Where to go?'}
            </div>
            <div
              className={`dropdown-menu ${locationDropdownVisible ? 'show' : ''}`}
            >
              {locations.map((location) => (
                <div
                  key={location.value}
                  className="dropdown-item"
                  onClick={() => handleLocationChange(location)}
                >
                  {location.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Check-In Date Picker */}
        <div className="form-group">
          <label>Check-In</label>
          <input type="date" className="date-picker" />
        </div>

        {/* Check-Out Date Picker */}
        <div className="form-group">
          <label>Check-Out</label>
          <input type="date" className="date-picker" />
        </div>

        {/* Guests and Room Dropdown */}
        <div className="form-group">
          <label>Guests and Room</label>
          <div className="dropdown-wrapper">
            <div
              className="dropdown-toggle"
              onClick={() => setGuestsDropdownVisible(!guestsDropdownVisible)}
            >
              {selectedGuests ? selectedGuests.label : 'Guests and Room'}
            </div>
            <div
              className={`dropdown-menu ${guestsDropdownVisible ? 'show' : ''}`}
            >
              {guestsRooms.map((option) => (
                <div
                  key={option.value}
                  className="dropdown-item"
                  onClick={() => handleGuestsChange(option)}
                >
                  {option.label}
                </div>
              ))}
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
