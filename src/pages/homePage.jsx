import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/home/HeroSection.jsx'
import HeaderText from '../components/home/header-text'
import SmallText from '../components/home/small-text'
import WatchTheJourney from '../components/home/WatchTheJourney.jsx'
import ImpactSection from '../components/home/ImpactSection.jsx'
import  AwardsSection from '../components/home/AwardsSection.jsx'
import ScrollText from '../components/home/scrollText'
import HerOrg from '../components/home/her-org'
import Support from '../components/home/support'
import Footer from '../components/Footer'
import ImpactText from '../components/home/impactText'
import Media from '../components/home/media'


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WatchTheJourney />
      <ImpactSection />
      <AwardsSection/>
      {/* <SeeMore /> */}
      <Media />
      <HerOrg />
      <Support />
      <Footer />
    </div>
  )
}

export default HomePage