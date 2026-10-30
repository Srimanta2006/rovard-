import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContextProvider'

const CartGrid = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext)
  console.log(cart)
  return (
    <div className="w-full">

      {cart.map((product) => (
        <div
          key={product.id}
          className="relative flex items-start gap-4 border-t border-[#333] py-5"
        >

          {/* Product Image */}
          <div className="h-[150px] w-[120px] shrink-0 border border-[#333]">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-1 flex-col justify-between min-h-[150px]">

            <div>
              <h2 className="text-3xl text-white">
                {product.name}
              </h2>
              {/* <p className='text-lg w-[55%] text-white/50'>{product.description}</p> */}

              <p className="mt-1 text-[10px] uppercase tracking-[3px] text-gray-400">
                {product.colors[0]} / {product.sizes[0]}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="flex w-fit items-center border border-[#333] text-white">

              <button
                onClick={() =>
                  decreaseQuantity(product)
                }
                className="px-3 py-1 hover:bg-[var(--color-orange)]"
              >
                −
              </button>

              <span className="px-3 text-lg">
                {product.quantity}
              </span>

              <button
                onClick={() =>
                  increaseQuantity(product)
                }
                className="px-3 py-1 hover:bg-[var(--color-orange)]"
              >
                +
              </button>

            </div>
          </div>

          {/* Price */}
          <div className="self-end pb-1 text-xl font-medium text-white">
            <span>${(product.price * product.quantity).toFixed(2)}</span>
            {product.quantity >1 && (
              <p className='text-sm text-[var(--color-hover)]'>Per piece ${(product.price).toFixed(2)}</p>
            )}
          </div>

          {/* Remove Button */}
          <button
            onClick={() => removeFromCart(product.id)}
            className="absolute right-0 top-5 text-2xl text-gray-400 hover:text-white"
          >
            ×
          </button>

        </div>
      ))}

    </div>
  )
}

export default CartGrid