import React from 'react'
import CartHeader from '../Components/Cart/CartHeader'
import Navbar from '../Components/Layout/Navbar'
import Footer from '../Components/Layout/Footer'
import CartContainer from '../Components/Cart/CartContainer'
const Cart = () => {
  return (
    <div>
      <Navbar />
      <CartHeader />
      <CartContainer />
      <Footer />
    </div>
  )
}

export default Cart