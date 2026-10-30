import React, { createContext, useEffect, useState } from 'react'

export const WishlistContext = createContext(null);
const WishlistContextProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(()=>{
    const wishlistProducts = localStorage.getItem("wishlist");
    return wishlistProducts ? JSON.parse(wishlistProducts) : []
  })
  useEffect(()=>{
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
  },[wishlist])
  const wishlistCount = wishlist.length;

  // check if product is already wishlisted
  const isWishlisted = (productId) => {
  return wishlist.some((item) => item.id === productId);
};

  // add product to wishlist
  const toggleWishlist = (product) =>{
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.some((item)=> item.id === product.id)
      if(exists){
        return prevWishlist.filter((item) => item.id !== product.id)
      }
      return [...prevWishlist, product]
    })
  }



  return (
    <WishlistContext.Provider value={{wishlist, setWishlist, toggleWishlist, isWishlisted, wishlistCount}}>
        {children}
    </WishlistContext.Provider>
  )
}

export default WishlistContextProvider