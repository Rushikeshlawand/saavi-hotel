import React, { useState, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './searchForm.css';

const SearchForm = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [destinationDropdownVisible, setDestinationDropdownVisible] = useState(false);
  const [peopleDropdownVisible, setPeopleDropdownVisible] = useState(false);
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);

  const [adultNumber, setAdultNumber] = useState(0);
  const [childNumber, setChildNumber] = useState(0);

  const destinationDropdownRef = useRef(null);
  const peopleDropdownRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        destinationDropdownRef.current &&
        !destinationDropdownRef.current.contains(event.target)
      ) {
        setDestinationDropdownVisible(false);
      }
      if (
        peopleDropdownRef.current &&
        !peopleDropdownRef.current.contains(event.target)
      ) {
        setPeopleDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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
    return totalPeople === 0 ? 'Guest' : `${totalPeople} Guest${totalPeople > 1 ? 's' : ''}`;
  };

  return (
    <div className="search-form-container">
      <form className="search-form">
        {/* Destination Dropdown */}
        <div className="form-group" ref={destinationDropdownRef}>
          <label>Destination</label>
          <div className="dropdown-wrapper">
            <div
              className="dropdown-toggle"
              onClick={() => setDestinationDropdownVisible(!destinationDropdownVisible)}
            >
              {selectedDestination ? selectedDestination.label : 'Where to go?'}
            </div>
            <div
              className={`dropdown-menu ${
                destinationDropdownVisible ? 'show' : ''
              }`}
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
          <label>Arrival</label>
          <DatePicker
            selected={arrivalDate}
            onChange={(date) => setArrivalDate(date)}
            className="date-picker"
            placeholderText="Select Arrival Date"
          />
        </div>

        {/* Departure Date Picker */}
        <div className="form-group">
          <label>Departure</label>
          <DatePicker
            selected={departureDate}
            onChange={(date) => setDepartureDate(date)}
            className="date-picker"
            placeholderText="Select Departure Date"
          />
        </div>

        {/* People Dropdown */}
        <div className="form-group" ref={peopleDropdownRef}>
          <label>Guest</label>
          <div className="dropdown-wrapper">
            <div
              className="dropdown-toggle"
              onClick={() => setPeopleDropdownVisible(!peopleDropdownVisible)}
            >
              {renderPeopleLabel()}
            </div>
            <div
              className={`dropdown-menu ${
                peopleDropdownVisible ? 'show' : ''
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
  );
};

export default SearchForm;
