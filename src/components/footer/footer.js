// Footer.js
import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faEye, faBriefcase, faImages } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>About Us </h4>
        <p>
          Saavi Hotels is a chain of boutique hotels and a subsidiary of Saavi
          Events and Entertainment Pvt. Ltd headquartered at Gurgaon,
          Incorporated by the founder himself, Mr. Deepak Dangi. The company is
          a part of the PV Group, one of India’s growing business conglomerates.
        </p>
      </div>

      <div className="footer-section">
        <h4>Headquarter</h4>
        <p>
          The Saavi Hotel <br />
          1482, Huda Colony, Sector 46, <br />
          Gurugram, Haryana 122003
        </p>
      </div>

      <div className="footer-section">
        <h4>Important Links </h4>
        <ul>
          <li>
            <FontAwesomeIcon icon={faInfoCircle} className="icon-link" /> About Us
          </li>
          <li>
            <FontAwesomeIcon icon={faEye} className="icon-link" /> Vision
          </li>
          <li>
            <FontAwesomeIcon icon={faBriefcase} className="icon-link" /> Career
          </li>
          <li>
            <FontAwesomeIcon icon={faImages} className="icon-link" /> Gallery
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Follow Us Online </h4>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="icon">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
