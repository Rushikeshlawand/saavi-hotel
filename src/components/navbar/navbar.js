import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className='navbar'>
      <div className={`logo ${menuOpen ? 'open' : ''}`}>
        <img src={logo} alt='Saavi Hotels Logo' />
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About Us</a></li>
        <li><a href='#'>Our Hotels</a></li>
        <li><a href='#'>Offers & Packages</a></li>
        <li><a href='#'>Contact Us</a></li>
        <li className='book-now-container'>
          <button className='book-now'>Book Now</button>
        </li>
      </ul>
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
    </nav>
  )
}

export default Navbar
