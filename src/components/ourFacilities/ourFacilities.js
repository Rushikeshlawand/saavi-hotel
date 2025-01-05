import './ourFacilities.css'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules' // Corrected import
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Importing images
import BonfireImg from '../../assets/ourFacilities/bonfire.jpg'
import GuestAccessImg from '../../assets/ourFacilities/guest.png'
import AdventureImg from '../../assets/ourFacilities/adv.png'
import FoodImg from '../../assets/ourFacilities//food.png'
import RoomsImg from '../../assets/ourFacilities/room.png'

const Carousel = () => {
  const cards = [
    {
      id: 1,
      title: 'Bonfire',
      description:
        'We serve all food and drinks, ensuring freshness, cleanliness, and a delightful taste experience.',
      bgImg: BonfireImg
    },
    {
      id: 2,
      title: 'Guest Access',
      description:
        'Enjoy seamless guest access with modern facilities and top-notch hospitality.',
      bgImg: GuestAccessImg
    },
    {
      id: 3,
      title: 'Adventure',
      description:
        'Experience thrilling adventures, including trekking, camping, and more.',
      bgImg: AdventureImg
    },
    {
      id: 4,
      title: 'Food',
      description:
        'Indulge in a variety of cuisines prepared with love and care for a memorable dining experience.',
      bgImg: FoodImg
    },
    {
      id: 5,
      title: 'Rooms',
      description:
        'Relax in our comfortable, well-furnished rooms designed to offer you a homely ambiance.',
      bgImg: RoomsImg
    }
  ]

  return (
    <div className='carousel'>
      <div className='facilititesHeader'>
  <h2>Our Facilities</h2>
  <p className='tagline'>Experience comfort and luxury with our top-notch facilities.</p>
</div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Use modules here
        spaceBetween={20} // Space between cards
        slidesPerView={4} // Number of visible cards
        loop={true} // Enable infinite looping
        autoplay={{ delay: 2000, disableOnInteraction: false }} // Automatic sliding
        navigation={true} // Navigation arrows
        pagination={{ clickable: true }} // Pagination dots
      >
        {cards.map(card => (
          <SwiperSlide key={card.id}>
            <div
              className='carousel-card'
              style={{
                backgroundImage: `url(${card.bgImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className='carousel-card-overlay'></div> {/* Overlay div */}
              <div className='carousel-card-content'>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div><br/><br/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carousel
