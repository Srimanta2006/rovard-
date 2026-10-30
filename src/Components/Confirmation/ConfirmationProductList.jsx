import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContextProvider'
const ConfirmationProductList = () => {
    const { cart } = useContext(CartContext)

  return (
    <div className='mx-auto w-full max-w-[750px] flex flex-col gap-8 mt-15  '>
        {cart.map((item)=>{
            return(
                <div className='border-b border-white/20 pb-5 flex items-center justify-between pr-5'>
                    <div className='flex items-center gap-8'>
                        <div className='h-30 w-25 border-[0.2px] border-[var(--color-hover)]'>
                            <img src={item.image} alt={item.image} className='w-full h-full object-cover' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='text-xl text-[var(--font-alternative)]'>{item.name}</span>
                            <span className='text-lg text-[var(--color-hover)]'>{item.colors[0]} &nbsp; /&nbsp; {item.sizes[3]} &nbsp; × &nbsp; {item.quantity}</span>
                        </div>
                    </div>
                    <span>
                        ${(item.quantity * item.price).toFixed(2)}
                    </span>
                </div>
            )
        })}
    </div>
  )
}

export default ConfirmationProductList