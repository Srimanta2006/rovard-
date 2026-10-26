import React, { createContext } from 'react'

export const WishlistContext = createContext(null);
const WishlistContextProvider = ({ children }) => {
  return (
    <WishlistContext.Provider>
        {children}
    </WishlistContext.Provider>
  )
}

export default WishlistContextProvider