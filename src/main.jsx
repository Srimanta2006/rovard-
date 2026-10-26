import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CartContextProvider from './Context/CartContextProvider.jsx'
import WishlistContextProvider from './Context/WishlistContextProvider.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartContextProvider>
      <WishlistContextProvider>
        <App />
      </WishlistContextProvider>
    </CartContextProvider>
  </BrowserRouter>,
)
