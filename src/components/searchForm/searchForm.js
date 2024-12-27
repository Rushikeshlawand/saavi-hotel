import React, { useState } from "react";
import Select from "react-select";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./searchForm.css";

const SearchForm = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  
  const locations = [
    { value: "new-york", label: "New York" },
    { value: "paris", label: "Paris" },
    { value: "tokyo", label: "Tokyo" },
    { value: "sydney", label: "Sydney" },
  ];

  const guestsRooms = [
    { value: "1-1", label: "1 guest, 1 room" },
    { value: "2-1", label: "2 guests, 1 room" },
    { value: "2-2", label: "2 guests, 2 rooms" },
    { value: "3-2", label: "3 guests, 2 rooms" },
  ];

  const handleLocationChange = (selectedOption) => {
    setSelectedLocation(selectedOption);
  };

  return (
    <div className="search-form-container">
      <form className="search-form">
        {/* Location Dropdown */}
        <div className="form-group">
          <label>Location</label>
          <div className="dropdown-wrapper">
            <FaMapMarkerAlt className="icon" />
            <Dropdown>
              <Dropdown.Toggle
                variant="default"
                id="location-dropdown"
                className="btn dropdown-toggle bs-placeholder btn-default"
              >
                {selectedLocation ? selectedLocation.label : "Where to go?"}
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu open">
                {locations.map((location) => (
                  <Dropdown.Item
                    key={location.value}
                    eventKey={location.value}
                    onClick={() => handleLocationChange(location)}
                  >
                    {location.label}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        {/* Check-In Dropdown */}
        <div className="form-group">
          <label>Check-In</label>
          <div className="dropdown-wrapper">
            <input type="date" className="date-picker" />
          </div>
        </div>

        {/* Check-Out Dropdown */}
        <div className="form-group">
          <label>Check-Out</label>
          <div className="dropdown-wrapper">
            <input type="date" className="date-picker" />
          </div>
        </div>

        {/* Guests and Room Dropdown */}
        <div className="form-group">
          <label>Guests and Room</label>
          <div className="dropdown-wrapper">
            <Select
              options={guestsRooms}
              placeholder="2 guests, 1 room"
              className="custom-select"
            />
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
