import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import HeroSection from './HeroSection.jsx'
import WitnessTheJourney from './WitnessTheJourney.jsx'
import KeyInitiatives from './KeyInitiatitives.jsx'
import  ImpactStatistics from './ImpactStatistics.jsx'
import JourneyTimeline from './JourneyTimeline.jsx'
import JoinHerMovement from './JoinHerMovement.jsx'
import Footer from '../../components/Footer.jsx'
import Testimonials from './Testimonials.jsx'
import MediaFeatures from './MediaFeatures.jsx'
import AwardsRecognition from './AwardsRecognition.jsx'


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <JourneyTimeline/>
      <WitnessTheJourney />
      <KeyInitiatives />
      <ImpactStatistics/>
  
      <Testimonials />
      <AwardsRecognition/>
      <MediaFeatures />
      <JoinHerMovement />
      <Footer />
    </div>
  )
}

export default HomePage