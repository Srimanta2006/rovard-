import React from 'react'
import { products } from '../../Data/Products'
const ShopHeader = () => {
  return (
    <div className='mt-20 px-10 pt-32 flex items-end justify-between relative overflow-hidden'>
        <div>
            <span
             className='text-sm text-[var(--color-orange)] uppercase leading-snug'
            >{products.length} pieces - ss26</span>
            <h1 className='text-[12rem] leading-48 w-fit'>shop</h1>
        </div>
        <h1
        className='border absolute right-2 top-7 bottom-0
                  text-[19vw] leading-[15vw]
                  text-[var(--color-orange)] text-transparent
                  [text-stroke:0.5px_var(--color-bronze)] tracking-wider
                  [-webkit-text-stroke:0.2px_var(--color-bronze)]
                  selection:bg-[var(--color-orange)] selection:text-[var(--color-bg)]
        '>shop</h1>
    </div>
  )
}

export default ShopHeader