import { useCart } from '../context/CartContext'
import { getImage } from './ProductCard'

export default function CartItem({ item }) {

  const { changeQuantity, removeFromCart } = useCart()

  const { product, quantity } = item

  return (
   // 
    <li className="cart-item">
      <img src={getImage(product)} alt={product.title} />
      <div className="info">
        <h3>{product.title}</h3>
        <p>${product.price.toFixed(2)} each</p>
      </div>
      {/* //TODO increase the quantity number and also decrease it */}
      <div className="qty">
      <button onClick={() => changeQuantity(product.id, -1)}></button>
        <span>{quantity}</span>

      <button onClick={() => changeQuantity(product.id, 1)}>+</button>
      </div>
      <p className="line-total">${(product.price * quantity).toFixed(2)}</p>
      <button className="remove" onClick={() => removeFromCart(product.id)}>
        Delete
      </button>
    </li>
  )
}
