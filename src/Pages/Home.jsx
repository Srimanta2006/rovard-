import React from 'react'
import Navbar from '../Components/Layout/Navbar'
import Hero from '../Components/Home/Hero'
import MarqueeBadge from '../Components/Home/MarqueeBadge'
import NewDrop from '../Components/Home/NewDrop'
import Categories from '../Components/Home/Categories'
import Footer from '../Components/Layout/Footer'


const Home = () => {
  return (
    <section className=''>
        <Navbar />
        <Hero />
        <MarqueeBadge />
        <NewDrop />
        <Categories />
        <Footer />
    </section>
  )
}

export default Home