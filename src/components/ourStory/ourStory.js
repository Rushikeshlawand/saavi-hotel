import React from "react";
import "./ourStory.css";
import Ourstory from "../../assets/ourStory.png";

const OurStory=()=> {
  return (
    <div className="ourStory">
      {/* Header Section */}
      <div className="ourStory-header">
        <h1 className="ourStory-title">Our Story</h1>
        <p className="ourStory-subtitle">A Legacy of Luxury</p>
      </div>

      {/* Content Section */}
      <div className="ourStory-content">
        <div className="ourStory-text">
          <p>
            <span className="ourStory-highlight">SAAVI HOTELS</span>, a name
            synonymous with luxury and comfort, has been redefining the
            hospitality industry since [Year]. With a rich legacy and a
            commitment to excellence, we have established ourselves as a
            leading hotel chain in India.
          </p>
          <p>
            Our journey began with a vision to create world-class
            accommodations that cater to the diverse needs of our guests. Over
            the years, we have expanded our footprint across various locations,
            each hotel a testament to our dedication to quality and innovation.
          </p>
          <p>
            We pride ourselves on offering exceptional hospitality, from the
            moment you step into our lobby to the time you check out. Our
            experienced staff is committed to providing personalized service and
            ensuring your stay is truly memorable.
          </p>
          <button className="ourStory-button">Learn More →</button>
        </div>

        {/* Image Section */}
        <div className="ourStory-imageContainer">
          <img
            src={Ourstory}
            alt="Balcony View"
            className="ourStory-image"
          />
        </div>
      </div>
    </div>
  );
}

export default OurStory;
