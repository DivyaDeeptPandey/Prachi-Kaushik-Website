import React from 'react'
import { Routes, Route } from 'react-router-dom'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomePage from './pages/homePage'
import JourneyPage from './pages/journeyPage'
import ContributionPage from './pages/contributionPage'
import ArchivePage from './pages/archivePage'
import SupportPage from './pages/supportPage';
import Blogs from './pages/Blogs';
import VideoGallery from './pages/VideoGallery';
import MediaCoverage from './pages/MediaCoverage';
import StockImagesGallery from './pages/StockImagesGallery';

const App = () => {
  return (
    <div className='bg-gradient-to-r from-amber-50 to-amber-100' >
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Her-early-life' element={<JourneyPage />} />
        <Route path='/Her-contributions' element={<ContributionPage />} />
        <Route path='/Archive' element={<ArchivePage />} />
        <Route path='/support' element={<SupportPage />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/video-gallery' element={<VideoGallery />} />
        <Route path='/media-coverage' element={<MediaCoverage />} />
        <Route path='/stock-images-gallery' element={<StockImagesGallery />} />
      </Routes>
    </div>
  )
}

export default App