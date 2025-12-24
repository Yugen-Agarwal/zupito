import React, { useState } from 'react'
import HeroSection from './HeroSection'
import ActionsPage from './ActionsPage'
import EmailPrecision from './EmailPrecision'
import EmailsVerified from './EmailsVerified'
import EmailFinder from './EmailFinder'
import Teams from './Teams'
import Productivity from './Productivity'
import EmailFinderWorks from './EmailFinderWorks'
import FAQsPage from './FAQsPage'
import WinningTeams from './WinningTeams'
import Footer from './Footer'
import EmailVerifyPopup from './EmailVerifyPopup'


const HomePage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <div>
      <HeroSection />
      <ActionsPage isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
      <EmailPrecision />
      <EmailsVerified />
      <EmailFinder />
      <Teams />
      <WinningTeams />
      <Productivity />
      <EmailFinderWorks />
      <FAQsPage />
      <Footer />
      {isPopupOpen &&
        <EmailVerifyPopup onClose={() => setIsPopupOpen(false)} />
      }
    </div>
  )
}

export default HomePage
