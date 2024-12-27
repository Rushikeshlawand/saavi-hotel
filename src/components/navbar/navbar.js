import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png'; // Update this path based on your actual image location.

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Saavi Hotels Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Our Hotels</a></li>
        <li><a href="#">Offers & Packages</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <button className="book-now">Book Now</button>
    </nav>
  );
};

export default Navbar;
