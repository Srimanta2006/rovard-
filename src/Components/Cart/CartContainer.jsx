import React, { useContext } from 'react'
import CartSummary from './CartSummary'
import CartGrid from './CartGrid'
import { CartContext } from '../../Context/CartContextProvider'
import { Link } from 'react-router-dom'
const CartContainer = () => {
    const { cart } = useContext(CartContext)
    return (
        <div className='min-h-fit w-full px-6 py-16 mb-20 text-white md:px-10 lg:px-8'>
            {cart.length === 0 ? (
                <div className="flex min-h-[50vh] flex-col gap-12 items-center justify-center text-center">
                    <div className='flex flex-col gap-6'>
                        <div className="relative inline-block">

                            <h1 className="relative z-10 px-3 text-[10vw] md:text-[6vw] font-['Anton'] uppercase leading-none text-[#F5F3EF]">
                                bag is empty
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
                        <p className='text-lg text-white/50 '>Nothing in here yet. The new drop won't last long.</p>
                    </div>

                    <Link
                        to='/shop'
                        className='uppercase text-black text-sm tracking-[0.15rem] bg-[var(--color-orange)] hover:bg-[var(--color-text)]
                        px-10 py-6'
                    >
                        start shopping
                    </Link>
                </div>
            ) : (
                <div className='mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-16 md:grid-cols-[1.3fr_0.8fr] md:gap-12 lg:gap-12' >
                    <CartGrid />
                    <CartSummary />
                </div >
            )}
        </div>
    )
}

export default CartContainer

