import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Layout/Navbar'
import ShopHeader from '../Components/Shop/ShopHeader'
import FilterCategories from '../Components/Shop/FilterCategories'
import ShopGrid from '../Components/Shop/ShopGrid'
import Footer from '../Components/Layout/Footer'
import { useParams } from 'react-router-dom'
const Shop = () => {
  const { category } = useParams()
  const [selectedCategory, setSelectedCategory] = useState("All");
  useEffect(()=>{
    setSelectedCategory(category || "All")
  })
  return (
    <div>
      <Navbar />
      <ShopHeader />
      <FilterCategories
        selectedCategory = {selectedCategory}
        setSelectedCategory = {setSelectedCategory}
      />
      <ShopGrid selectedCategory={selectedCategory} />
      <Footer />
    </div>
  )
}

export default Shop