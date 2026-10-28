import React from 'react'
import { newDrop } from '../../Data/NewArrival'
import ProductCard from '../Product/ProductCard'
const NewDrop = () => {
  return (
    <div className='w-full mt-25 px-10'>
        <div className="flex flex-col gap-2">
        <span className="text-[10px] uppercase tracking-[0.28rem] text-[var(--color-orange)]">
          New Drop
        </span>

        <h1 className="text-4xl selection:bg-[var(--color-orange)] selection:text-[var(--color-bg)] sm:text-6xl lg:text-8xl">
          Fresh out the tunnel
        </h1>
      </div>

      {/* Products Grid */}
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
          {newDrop.map((product)=>(
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
    </div>
  )
}

export default NewDrop