import React from 'react'
import CartSummary from './CartSummary'
import CartGrid from './CartGrid'
const CartContainer = () => {
    return (
        <div className='max-h-screen w-full px-6 py-16 text-white md:px-10 lg:px-8'>
            <div className='mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-16 md:grid-cols-[1.3fr_0.8fr] md:gap-12 lg:gap-12'>
                <CartGrid />
                <CartSummary />
            </div>
        </div>
    )
}

export default CartContainer