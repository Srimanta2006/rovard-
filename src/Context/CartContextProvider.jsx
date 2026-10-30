import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext(null);
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : []
  })
  // use saved cart in localstorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart]);

  const cartCount = cart.length;


  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      // check product is already present or not
      const existingProduct = prevCart.some((item) => item?.id === product.id);
      if (existingProduct) {
        alert("Product is already present in the cart");
        return prevCart.map((item) =>
          item?.id === product.id
            ? { ...item, quantity: (item.quantity || 0) + 1 }
            : item
        );
      }
      alert("product added to cart");
      return [...prevCart , {...product, quantity : 1}]
    });
  }





  return (
    <CartContext.Provider value={{cart, setCart, addToCart, cartCount}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider