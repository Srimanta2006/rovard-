import React from 'react'
import Navbar from '../Components/Layout/Navbar'
import AboutHeader from '../Components/About/AboutHeader'
import AboutContent from '../Components/About/AboutContent'
import CampaignBanner from '../Components/About/CampaignBanner'
import Footer from '../Components/Layout/Footer'
const About = () => {
  return (
    <div>
      <Navbar />
      <AboutHeader />
      <AboutContent />
      <CampaignBanner />
      <Footer />
    </div>
  )
}

export default About