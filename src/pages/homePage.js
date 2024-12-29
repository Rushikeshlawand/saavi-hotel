import React from 'react'
import './homepage.css'
import Navbar from '../components/navbar/navbar'
import HeroSection from '../components/heroSection/heroSection'
import CarouselComponent from '../components/carouselComponent/carouselComponent'
import BookButton from '../components/bookButton/bookButton'
import SaaviCards from '../components/saaviCards/saaviCards'
import Footer from '../components/footer/footer'
import WhyChooseSaavi from '../components/whyChooseSaavi/whyChooseSaavi'
import OurStory from '../components/ourStory/ourStory'

const App = () => {
  return (
    <div className='bg'>
      <Navbar />
      <HeroSection />
      <div className='carousel'>
        <CarouselComponent />
      </div>
      <BookButton />
      <div className='whyChooseSaavi'>
      <WhyChooseSaavi />
      </div>
      <OurStory />
      <SaaviCards />
      <Footer />
    </div>
  )
}

export default App
