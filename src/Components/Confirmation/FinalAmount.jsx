import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContextProvider'
import { Link } from 'react-router-dom'

const FinalAmount = () => {
    const { cart, clearCart } = useContext(CartContext)

    const subtotal = cart.reduce(
        (total, product) => total + (product.price * product.quantity), 0
    )

    const shipping = 12
    const total = subtotal + shipping

    return (
        <div className="mx-auto w-full max-w-[750px] flex flex-col mt-5 mb-25">
            <div className="space-y-3">
                <div className="flex justify-between text-lg">
                    <span>Subtotal</span>
                    <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-lg">
                    <span>Shipping</span>
                    <span className="text-white">${shipping.toFixed(2)}</span>
                </div>
            </div>

            <div className="mt-3 border-t border-[#292725] pt-4">
                <div className="flex justify-between text-lg font-semibold text-white">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </div>
            <Link
                onClick={clearCart}
                to='/shop'
                className='bg-[var(--color-orange)] w-fit px-12 py-4 uppercase text-black tracking-[0.3rem] text-xs mt-5'
            >
                keep shopping
            </Link>

        </div>
    )
}

export default FinalAmount