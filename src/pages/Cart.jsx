import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { items, totalPrice, clearCart } = useCart()

  const handleCheckout = () => {
    alert(`Thank you for the order!  Total price is $${totalPrice.toFixed(2)} -USD`)
    clearCart()
  }

  if (items.length === 0) {
    return (
      <div className="status">
        <p>Your cart is empty. Hurry up and buy something!</p>
        <Link to="/">Look at MerryPixel Swag</Link>
      </div>
    )
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </ul>
      <div className="summary">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button className="checkout" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  )
}
