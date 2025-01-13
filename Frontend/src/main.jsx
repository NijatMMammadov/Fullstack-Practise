import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductProvider from './Context/ProductsContext.jsx'
import WishlistProvider from './Context/WishlistContext.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <WishlistProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </WishlistProvider>
  </>,
)
