import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { CartProvider, useCart } from './context/CartContext'
import Home from './pages/Home'
import Cart from './pages/Cart'

function Header() {
  const { totalCount } = useCart()
  return (
    <header>
      <Link to="/" className="logo">MerryPixel's MiniShop</Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">My Cart ({totalCount})</Link>
      </nav>
    </header>
  )
}

export default function App() {
  return (
    <BrowserRouter>
<CartProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
  </CartProvider>
    </BrowserRouter>
  )
}
