import React from 'react'
import Navbar from '../Components/Layout/Navbar'
import Footer from '../Components/Layout/Footer'
import WIshlistHeader from '../Components/Wishlist/WIshlistHeader'
import WishlistProductGrid from '../Components/Wishlist/WishlistProductGrid'
const Wishlist = () => {
  return (
    <div>
      <Navbar />
      <WIshlistHeader />
      <WishlistProductGrid />
      <Footer />
    </div>
  )
}

export default Wishlist