import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import Wishlist from './Pages/Wishlist'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <section>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:category' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/wishlist' element={<Wishlist />} />
      </Routes>
    </section>
  )
}

export default App