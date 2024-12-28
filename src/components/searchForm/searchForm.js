import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './searchForm.css';

const SearchForm = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locationDropdownVisible, setLocationDropdownVisible] = useState(false);
  const [guestsDropdownVisible, setGuestsDropdownVisible] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [selectedGuestOption, setSelectedGuestOption] = useState(null);

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

  const handleGuestSelection = (option) => {
    setSelectedGuestOption(option);
    setGuestsDropdownVisible(false); // Close the dropdown after selection
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
              className={`dropdown-menu ${
                locationDropdownVisible ? 'show' : ''
              }`}
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
        <div className="form-group">
          <label>Guests and Room</label>
          <div className="dropdown-wrapper">
            <div
              className="dropdown-toggle"
              onClick={() => setGuestsDropdownVisible(!guestsDropdownVisible)}
            >
              {selectedGuestOption
                ? selectedGuestOption.label
                : 'Select guests and rooms'}
            </div>
            <div
              className={`dropdown-menu ${
                guestsDropdownVisible ? 'show' : ''
              }`}
            >
              {guestsRooms.map((option) => (
                <div
                  key={option.value}
                  className="dropdown-item"
                  onClick={() => handleGuestSelection(option)}
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
