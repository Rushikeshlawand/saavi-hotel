import React from 'react';
import "./footer.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaPinterest, FaMapMarkerAlt, FaPhoneAlt, FaFax } from 'react-icons/fa'; // Importing icons
import logo from "../../assets/logo.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-left">
                    <img src={logo} alt="Saavi Hotels Logo" className="footer-logo" />
                    <h2>Saavi Hotels</h2>
                </div>
                <div className="footer-right">
                    <div className="footer-item">
                        <FaMapMarkerAlt className="footer-icon" />
                        <label>Gorem ipsum dolor sit amet, consectetur adipiscing elit.</label>
                    </div>
                    <div className="footer-item">
                        <FaPhoneAlt className="footer-icon" />
                        <label>1234567890</label>
                    </div>
                    <div className="footer-item">
                        <FaFax className="footer-icon" />
                        <label>1234567890</label>
                    </div>
                    <div className="footer-item">
                        <label>Social Media: </label>
                        <div className="social-icons">
                            <FaFacebook className="social-icon" />
                            <FaTwitter className="social-icon" />
                            <FaLinkedin className="social-icon" />
                            <FaYoutube className="social-icon" />
                            <FaInstagram className="social-icon" />
                            <FaPinterest className="social-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
