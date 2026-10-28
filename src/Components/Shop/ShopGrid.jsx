import React from 'react'
import { products } from '../../Data/Products'
import ProductCard from '../Product/ProductCard'
const ShopGrid = ({ selectedCategory }) => {
    const filterProducts = selectedCategory === "All"
    ? products
    : products.filter((product) =>
          product.category.toLowerCase() === selectedCategory.toLocaleLowerCase()
      )
  return (
    <div className='px-10 py-10  grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16'>
        {filterProducts.map((product)=>{
            return(
                <ProductCard key={product.id} product={product} />
            )
        })}
    </div>
  )
}

export default ShopGrid