import React from 'react'
import './homepage.css'
import Navbar from '../components/navbar/navbar'
import HeroSection from '../components/heroSection/heroSection'
import CarouselComponent from '../components/carouselComponent/carouselComponent'
import BookButton from '../components/bookButton/bookButton'
import Footer from '../components/footer/footer'
import WhyChooseSaavi from '../components/whyChooseSaavi/whyChooseSaavi'
import OurStory from '../components/ourStory/ourStory'
import PerfectGateway from '../../src/components/perfectGateway/perfectGateway'
import ExperienceUnforgettable from '../../src/components/experienceUnforgettable/experienceUnforgettable'
import Guest from '../../src/components/guest/guest'
import SaaviCards from '../components/saaviCards/saaviCards'

const App = () => {
  return (
    <div className='bg'>
      <Navbar />
      <HeroSection />
      <CarouselComponent />
      <BookButton />
      <div className='whyChooseSaavi'>
        <WhyChooseSaavi />
      </div>
      <div className='ourstorypage'>
        <div className='temp'>
          <OurStory />
          <PerfectGateway />

          <div className='ExperienceUnforgettable'>
            <ExperienceUnforgettable />
          </div>
          <Guest />
        </div>

        <SaaviCards />
      </div>
      <Footer />
    </div>
  )
}

export default App
