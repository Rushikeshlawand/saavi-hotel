import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import "./carouselComponent.css";
import Image from "../../assets/carouselData/image.png";
import Image1 from "../../assets/carouselData/image1.png";
import Image2 from "../../assets/carouselData/image2.png";

const carouselData = [
  {
    id: 1,
    image: Image,
    title: "Saavi Hotel Golf Course",
    rating: 4.8,
    reviews: 145,
  },
  {
    id: 2,
    image: Image1,
    title: "Saavi Hotel Golf Course",
    rating: 4.8,
    reviews: 145,
  },
  {
    id: 3,
    image: Image2,
    title: "Saavi Hotel Golf Course",
    rating: 4.8,
    reviews: 145,
  },
];

const CarouselComponent = () => {
  return (
    <>
    <div className="title">
      <h2>Experience Saavi Hospitality</h2>
      </div>
    <div className="carousel-container">
      
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="carousel-swiper"
      >
        {carouselData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="card">
              <img src={item.image} alt={item.title} className="card-image" />
              <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <div className="card-rating">
                  <FaStar className="star-icon" /> {item.rating} | {item.reviews} Reviews
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="swiper-button-prev custom-nav-button">&#8249;</button>
      <button className="swiper-button-next custom-nav-button">&#8250;</button>
    </div>
    
    </>
  );
};

export default CarouselComponent;
