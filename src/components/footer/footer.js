import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaGoogle } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import './footer.css';

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer className="footer-container">
      <div className="footer-content" style={{ justifyContent: windowWidth < 768 ? 'center' : 'space-between', flexDirection: windowWidth < 768 ? 'column' : 'row' }}>
        {/* Left Side: Logo and Hotel Name */}
        <div className="footer-left">
          <img
            src={logo}
            alt="Saavi Hotels"
            className="footer-logo"
          />
          <h3 className="footer-title">Saavi Hotels</h3>
        </div>

        {/* Right Side: Map Icon, Address, Phone Number, and Social Media */}
        <div className="footer-right">
          <div className="footer-info">
            <FaMapMarkerAlt className="footer-icon" />
            <p>Gorem ipsum dolor sit amet, consetetur adipiscing elit.</p>
          </div>

          <div className="footer-info">
            <FaPhoneAlt className="footer-icon" />
            <p>(123)456-7890</p>
          </div>

          <div className="footer-social">
            <p className="footer-social-title">Social Media</p>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="social-icon" />
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <FaGoogle className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
