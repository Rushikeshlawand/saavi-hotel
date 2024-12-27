import React from "react";
import "./whyChooseSaavi.css";
import Card1 from "../../assets/whyChooseSaaviCard/whyChooseSaaviCard1.png";
import Card2 from "../../assets/whyChooseSaaviCard/whyChooseSaaviCard2.png";
import Card3 from "../../assets/whyChooseSaaviCard/whyChooseSaaviCard3.png";


function WhyChooseSaavi() {
  const features = [
    {
      title: "Personalized Service",
      description:
        "Our dedicated staff is committed to providing personalized service, ensuring your stay is comfortable and enjoyable.",
      imgSrc: Card1, // Replace with actual image path
    },
    {
      title: "Pristine Cleanliness",
      description:
        "We prioritize cleanliness and hygiene, maintaining the highest standards of sanitation.",
      imgSrc: Card2, // Replace with actual image path
    },
    {
      title: "Luxurious Comfort",
      description:
        "Relax in our luxurious rooms, designed for ultimate comfort and relaxation.",
      imgSrc: Card3, // Replace with actual image path
    },
  ];

  return (
    <div className="whyChooseSaavi">
      {/* Header Section */}
      <header className="whyChooseSaavi-header">
        <h1 className="whyChooseSaavi-title">Why Choose Saavi?</h1>
        <p className="whyChooseSaavi-subtitle">
          Luxurious accommodations, world-class service, and prime locations.
        </p>
      </header>

      {/* Features Section */}
      <div className="whyChooseSaavi-features">
        {features.map((feature, index) => (
          <div className="whyChooseSaavi-featureCard" key={index}>
            <img
              src={feature.imgSrc}
              alt={feature.title}
              className="whyChooseSaavi-featureImage"
            />
            <h2 className="whyChooseSaavi-featureTitle">{feature.title}</h2>
            <p className="whyChooseSaavi-featureDescription">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseSaavi;
