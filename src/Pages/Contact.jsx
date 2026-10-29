import React from 'react'
import Navbar from '../Components/Layout/Navbar'
import Footer from '../Components/Layout/Footer'
import ContactHeader from '../Components/Contact/ContactHeader'
import ContactFormGrid from '../Components/Contact/ContactFormGrid'
const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactHeader />
      <ContactFormGrid />
      <Footer />
    </div>
  )
}

export default Contact