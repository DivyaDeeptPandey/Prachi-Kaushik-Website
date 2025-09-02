import React from 'react'
import { Routes, Route } from 'react-router-dom'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomePage from './pages/homePage'
import JourneyPage from './pages/journeyPage'
import ArchivePage from './pages/Archives'
import SupportPage from './pages/supportPage';
import Blogs from './pages/Blogs';
import VideoGallery from './pages/VideoGallery';
import MediaCoverage from './pages/MediaCoverage';
import EarlyLife from './pages/EarlyLife';
import HerInspiration from './pages/HerInspiration';
import HerAchievements from './pages/HerAchievements';
import SocialEnterprise from './pages/SocialEnterprise';
import WomenEmpowerment from './pages/WomenEmpowerment';
import CommunityDevelopment from './pages/CommunityDevelopment';
import ContributionsPage from './pages/Contributions';
import StockImagesGallery from './pages/StockImagesGallery';

const App = () => {
  return (
    <div className='bg-gradient-to-r from-amber-50 to-amber-100' >
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Her-early-life' element={<JourneyPage />} />
        <Route path='/contributions' element={<ContributionsPage />} />
        <Route path='/archives' element={<ArchivePage />} />
        <Route path='/support' element={<SupportPage />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/video-gallery' element={<VideoGallery />} />
        <Route path='/media-coverage' element={<MediaCoverage />} />
        <Route path='/stock-images-gallery' element={<StockImagesGallery />} />
        <Route path='/her-early-life' element={<EarlyLife />} />
        <Route path='/her-inspiration' element={<HerInspiration />} />
        <Route path='/achievements' element={<HerAchievements />} />
        <Route path='/social-enterprise' element={<SocialEnterprise />} />
        <Route path='/women-empowerment' element={<WomenEmpowerment />} />
        <Route path='/community-development' element={<CommunityDevelopment />} />
      </Routes>
    </div>
  )
}

export default App