import React from 'react'
import CheckoutHeader from '../Components/Checkout/CheckoutHeader'
import Navbar from '../Components/Layout/Navbar'
import CheckoutContainer from '../Components/Checkout/CheckoutContainer'
import Footer from '../Components/Layout/Footer'
const Checkout = () => {
  return (
    <div>
      <Navbar />
      <CheckoutHeader />
      <CheckoutContainer />
      <Footer />
    </div>
  )
}

export default Checkout