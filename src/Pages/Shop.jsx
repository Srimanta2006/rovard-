import React, { useState } from 'react'
import Navbar from '../Components/Layout/Navbar'
import ShopHeader from '../Components/Shop/ShopHeader'
import FilterCategories from '../Components/Shop/FilterCategories'
import ShopGrid from '../Components/Shop/ShopGrid'
const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div>
      <Navbar />
      <ShopHeader />
      <FilterCategories
        selectedCategory = {selectedCategory}
        setSelectedCategory = {setSelectedCategory}
      />
      <ShopGrid selectedCategory={selectedCategory} />
    </div>
  )
}

export default Shop