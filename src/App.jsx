import React from 'react'
import { Routes, Route } from 'react-router-dom'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomePage from './pages/homepage/homePage'
import ArchivePage from './pages/Archives'
import SupportPage from './pages/supportPage';
import Blogs from './pages/Blogs';
import VideoGallery from './pages/VideoGallery';
import MediaCoverage from './pages/MediaCoverage';
import HerStory from './pages/HerStory';
import HerInspiration from './pages/HerInspiration';
import HerAchievements from './pages/HerAchievements';
import SocialEnterprise from './pages/SocialEnterprise';
import WomenEmpowerment from './pages/WomenEmpowerment';
import CommunityDevelopment from './pages/CommunityDevelopment';
import ContributionsPage from './pages/Contributions';
import StockImagesGallery from './pages/StockImagesGallery';
import Contact from './pages/Contact';
import Initiatives from './pages/Initiatives/Initiatives';
import Media from './pages/media/Media';

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contributions' element={<ContributionsPage />} />
        <Route path='/archives' element={<ArchivePage />} />
        <Route path='/support' element={<SupportPage />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/video-gallery' element={<VideoGallery />} />
        <Route path='/media-coverage' element={<MediaCoverage />} />
        <Route path='/stock-images-gallery' element={<StockImagesGallery />} />
        <Route path='/her-story' element={<HerStory/>} />
        <Route path='/her-inspiration' element={<HerInspiration />} />
        <Route path='/achievements' element={<HerAchievements />} />
        <Route path='/social-enterprise' element={<SocialEnterprise />} />
        <Route path='/women-empowerment' element={<WomenEmpowerment />} />
        <Route path='/community-development' element={<CommunityDevelopment />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/initiatives' element={<Initiatives />} />
        <Route path='/media' element={<Media />} />
      </Routes>

  )
}

export default App