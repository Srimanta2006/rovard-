import React, { useContext } from 'react'
import { CartContext} from '../../Context/CartContextProvider'
const CartHeader = () => {
    const {cartCount } = useContext(CartContext)
    return (
        <div className='mt-20 px-10 pt-32 flex items-end justify-between relative overflow-hidden border-b-[0.1px] pb-25 border-white/10'>
            <div>
                <span
                    className='text-sm text-[var(--color-orange)] uppercase leading-snug'
                >{cartCount} item</span>
                <h1 className='text-[12rem] leading-48 w-fit uppercase'>bag</h1>
                {/* <p className='text-xl mt-4 text-white/70'>We started in a basement studio with one hoodie pattern and a dye vat. <br /> We still make everything in small runs.</p> */}
            </div>
            <h1
                className='border absolute right-2 top-7 bottom-0
                  text-[19vw] leading-[15vw] tracking-wider
                  text-[var(--color-orange)] text-transparent
                  [text-stroke:0.5px_var(--color-bronze)]
                  [-webkit-text-stroke:0.2px_var(--color-bronze)]
                  selection:bg-[var(--color-orange)] selection:text-[var(--color-bg)]
        '>bag</h1>
        </div>
    )
}

export default CartHeader