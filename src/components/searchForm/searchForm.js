import React from "react";
import Select from "react-select";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";
import "./searchForm.css";

const SearchForm = () => {
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

  return (
    <div className="search-form-container">
      <form className="search-form">
        {/* Location Dropdown */}
        <div className="form-group">
          <label>Location</label>
          <div className="dropdown-wrapper">
            <FaMapMarkerAlt className="icon" />
            <Select
              options={locations}
              placeholder="Find location"
              className="custom-select"
            />
          </div>
        </div>

        {/* Check-In Dropdown */}
        <div className="form-group">
          <label>Check-In</label>
          <div className="dropdown-wrapper">
            <FaCalendarAlt className="icon" />
            <input type="date" className="date-picker" />
          </div>
        </div>

        {/* Check-Out Dropdown */}
        <div className="form-group">
          <label>Check-Out</label>
          <div className="dropdown-wrapper">
            <FaCalendarAlt className="icon" />
            <input type="date" className="date-picker" />
          </div>
        </div>

        {/* Guests and Room Dropdown */}
        <div className="form-group">
          <label>Guests and Room</label>
          <div className="dropdown-wrapper">
            <FaUser className="icon" />
            <Select
              options={guestsRooms}
              placeholder="2 guest, 1 room"
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
