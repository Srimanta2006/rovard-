
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContextProvider'

const CheckoutSummary = () => {
  const { cart } = useContext(CartContext)

  const [promoInput, setPromoInput] = useState('')
  const [appliedPromo, setAppliedPromo] = useState(false)

  const subtotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  )

  const shipping = 12
  const freeShippingLimit = 150
  const discount = appliedPromo ? subtotal * 0.10 : 0

  const total = subtotal - discount + shipping
  const remaining = Math.max(0, freeShippingLimit - subtotal)

  const handleApplyPromo = () => {
    if (promoInput.trim().toUpperCase() === 'ROVARD10') {
      setAppliedPromo(true)
    }
  }

  const handleRemovePromo = () => {
    setAppliedPromo(false)
    setPromoInput('')
  }

  return (
    <div className="w-full h-fit border border-[#333] bg-[#080706] p-5 text-[#F5F3EF]">

      {/* Heading */}
      <h2 className="font-heading text-3xl uppercase">
        Summary
      </h2>

      {/* Price Details */}
      <div className="mt-5 space-y-3 text-sm">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        {appliedPromo && (
          <div className="flex justify-between text-[#F15A0A]">
            <span>Promo ROVARD10</span>
            <span>-${discount.toFixed(2)}</span>
          </div>
        )}

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>

      </div>

      {/* Total */}
      <div className="mt-3 border-t border-[#333] pt-4">
        <div className="flex justify-between text-lg">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Free Shipping */}
      {/* <p className="mt-4 text-[10px] uppercase tracking-[2px] text-[#F15A0A]">
        {remaining > 0
          ? `$${remaining.toFixed(2)} away from free shipping`
          : 'You have unlocked free shipping'}
      </p> */}

      {/* Promo Section */}
      <div className="mt-6">

        {!appliedPromo ? (

          <div className="flex border border-[#333]">
            <input
              type="text"
              placeholder="PROMO (TRY ROVARD10)"
              value={promoInput}
              onChange={(e) => setPromoInput(e.target.value)}
              className="min-w-0 flex-1 bg-transparent px-3 py-2 text-[11px] uppercase tracking-wider outline-none placeholder:text-gray-500"
            />

            <button
              onClick={handleApplyPromo}
              className="border-l border-[#333] px-4 text-[10px] font-semibold tracking-[2px] hover:text-[#F15A0A]"
            >
              APPLY
            </button>
          </div>

        ) : (

          <div className="flex items-center justify-between border border-[#F15A0A] px-3 py-2">
            <span className="text-[10px] tracking-[2px] text-[#F15A0A]">
              ROVARD10 APPLIED
            </span>

            <button
              onClick={handleRemovePromo}
              className="text-[10px] font-semibold tracking-[2px] hover:text-[#F15A0A]"
            >
              REMOVE
            </button>
          </div>

        )}

      </div>
    </div>
  )
}

export default CheckoutSummary
