import React from 'react'
import { Routes, Route } from 'react-router-dom'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomePage from './pages/homePage'
import JourneyPage from './pages/journeyPage'
import ContributionPage from './pages/contributionPage'
import ArchivePage from './pages/archivePage'
import SupportPage from './pages/supportPage';

const App = () => {
  return (
    <div className='bg-gradient-to-r from-amber-50 to-amber-100' >
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Her-early-life' element={<JourneyPage />} />
        <Route path='/Her-contributions' element={<ContributionPage />} />
        <Route path='/Archive' element={<ArchivePage />} />
        <Route path='/support' element={<SupportPage />} />
      </Routes>
    </div>
  )
}

export default App