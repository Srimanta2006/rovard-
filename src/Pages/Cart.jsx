import React from 'react'
import CartHeader from '../Components/Cart/CartHeader'
import Navbar from '../Components/Layout/Navbar'
import CartContainer from '../Components/Cart/CartContainer'
const Cart = () => {
  return (
    <div>
      <Navbar />
      <CartHeader />
      <CartContainer />
    </div>
  )
}

export default Cart