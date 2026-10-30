import React, { useContext } from 'react'
import { WishlistContext } from '../../Context/WishlistContextProvider'
import { CartContext } from '../../Context/CartContextProvider'
import ProductCard from '../Product/ProductCard'
import { Link } from 'react-router-dom'

const WishlistProductGrid = () => {
  const { wishlist } = useContext(WishlistContext)
  const { addToCart } = useContext(CartContext)

  const handleAddAllToBag = () => {
    wishlist.forEach((product) => {
      addToCart(product)
    })
  }

  return (
    <div className="w-full">

      {wishlist.length === 0 ? (
        <div className="flex min-h-[50vh] flex-col gap-12 items-center justify-center text-center">
          <div className='flex flex-col gap-6'>
            <div className="relative inline-block">

              <h1 className="relative z-10 px-3 text-[10vw] md:text-[6vw] font-['Anton'] uppercase leading-none text-[#F5F3EF]">
                no saved yet
              </h1>

              <svg
                className="absolute -left-[2%] -top-[8%] z-20 h-[116%] w-[105%] pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M 5, 50
              C 5, 10, 95,5,95,45
              C 95,85,10,95,8,55
              C 7,35,45,25,85,35"
                  fill="none"
                  stroke="#F56213"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

            </div>
            <p className='text-lg text-white/50 '>Tap the heart on any piece to keep it here.</p>
          </div>

          <Link
            to='/shop'
            className='uppercase text-black text-sm tracking-[0.15rem] bg-[var(--color-orange)] hover:bg-[var(--color-text)]
                        px-10 py-6'
          >
            browse the shop
          </Link>
        </div>
      ) : (
        <>
          <div className="mb-4 flex items-center justify-end mt-6 mx-5">
            <button
              onClick={handleAddAllToBag}
              className="border-[0.3px] border-white/50 uppercase text-white/80 tracking-[0.2rem] px-8 py-4 text-xs
              cursor-pointer font-semibold text-white transition-all hover:text-[#d94d05] hover:border-[#d94d05]"
            >
              Add All to Bag
            </button>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-10 px-4 py-10 sm:gap-x-6 sm:px-6 lg:grid-cols-4 lg:px-5 lg:mb-30 sm:mb-12">
            {wishlist.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </>
      )}

    </div>
  )
}

export default WishlistProductGrid